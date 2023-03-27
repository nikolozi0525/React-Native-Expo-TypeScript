"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeUIRuntime = initializeUIRuntime;

var _errors = require("./errors");

var _NativeReanimated = _interopRequireDefault(require("./NativeReanimated"));

var _PlatformChecker = require("./PlatformChecker");

var _threads = require("./threads");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// callGuard is only used with debug builds
function callGuardDEV(fn) {
  'worklet';

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  try {
    fn(...args);
  } catch (e) {
    if (global.ErrorUtils) {
      global.ErrorUtils.reportFatalError(e);
    } else {
      throw e;
    }
  }
}

function valueUnpacker(objectToUnpack, category) {
  'worklet';

  let workletsCache = global.__workletsCache;
  let handleCache = global.__handleCache;

  if (workletsCache === undefined) {
    // init
    workletsCache = global.__workletsCache = new Map();
    handleCache = global.__handleCache = new WeakMap();
  }

  const workletHash = objectToUnpack.__workletHash;

  if (workletHash !== undefined) {
    let workletFun = workletsCache.get(workletHash);

    if (workletFun === undefined) {
      const initData = objectToUnpack.__initData;

      if (global.evalWithSourceMap) {
        // if the runtime (hermes only for now) supports loading source maps
        // we want to use the proper filename for the location as it guarantees
        // that debugger understands and loads the source code of the file where
        // the worklet is defined.
        workletFun = global.evalWithSourceMap('(' + initData.code + '\n)', initData.location, initData.sourceMap);
      } else if (global.evalWithSourceUrl) {
        // if the runtime doesn't support loading source maps, in dev mode we
        // can pass source url when evaluating the worklet. Now, instead of using
        // the actual file location we use worklet hash, as it the allows us to
        // properly symbolicate traces (see errors.ts for details)
        workletFun = global.evalWithSourceUrl('(' + initData.code + '\n)', `worklet_${workletHash}`);
      } else {
        // in release we use the regular eval to save on JSI calls
        // eslint-disable-next-line no-eval
        workletFun = eval('(' + initData.code + '\n)');
      }

      workletsCache.set(workletHash, workletFun);
    }

    const functionInstance = workletFun.bind(objectToUnpack);
    objectToUnpack._recur = functionInstance;
    return functionInstance;
  } else if (objectToUnpack.__init) {
    let value = handleCache.get(objectToUnpack);

    if (value === undefined) {
      value = objectToUnpack.__init();
      handleCache.set(objectToUnpack, value);
    }

    return value;
  } else if (category === 'RemoteFunction') {
    const fun = () => {
      throw new Error(`Tried to synchronously call a non-worklet function on the UI thread.

Possible solutions are:
  a) If you want to synchronously execute this method, mark it as a worklet
  b) If you want to execute this function on the JS thread, wrap it using \`runOnJS\``);
    };

    fun.__remoteFunction = objectToUnpack;
    return fun;
  } else {
    throw new Error('data type not recognized by unpack method');
  }
}

function setupRequestAnimationFrame() {
  'worklet'; // Jest mocks requestAnimationFrame API and it does not like if that mock gets overridden
  // so we avoid doing requestAnimationFrame batching in Jest environment.

  const nativeRequestAnimationFrame = global.requestAnimationFrame;
  let animationFrameCallbacks = [];
  let lastNativeAnimationFrameTimestamp = -1;

  global.__flushAnimationFrame = frameTimestamp => {
    const currentCallbacks = animationFrameCallbacks;
    animationFrameCallbacks = [];
    currentCallbacks.forEach(f => f(frameTimestamp));
    (0, _threads.flushImmediates)();
  };

  global.requestAnimationFrame = callback => {
    animationFrameCallbacks.push(callback);

    if (animationFrameCallbacks.length === 1) {
      // We schedule native requestAnimationFrame only when the first callback
      // is added and then use it to execute all the enqueued callbacks. Once
      // the callbacks are run, we clear the array.
      nativeRequestAnimationFrame(timestamp => {
        if (lastNativeAnimationFrameTimestamp >= timestamp) {
          // Make sure we only execute the callbacks once for a given frame
          return;
        }

        lastNativeAnimationFrameTimestamp = timestamp;
        global.__frameTimestamp = timestamp;

        global.__flushAnimationFrame(timestamp);

        global.__frameTimestamp = undefined;
      });
    } // Reanimated currently does not support cancelling callbacks requested with
    // requestAnimationFrame. We return -1 as identifier which isn't in line
    // with the spec but it should give users better clue in case they actually
    // attempt to store the value returned from rAF and use it for cancelling.


    return -1;
  };
}

function initializeUIRuntime() {
  _NativeReanimated.default.installCoreFunctions(callGuardDEV, valueUnpacker);

  const IS_JEST = (0, _PlatformChecker.isJest)();

  if (IS_JEST) {
    // requestAnimationFrame react-native jest's setup is incorrect as it polyfills
    // the method directly using setTimeout, therefore the callback doesn't get the
    // expected timestamp as the only argument: https://github.com/facebook/react-native/blob/main/jest/setup.js#L28
    // We override this setup here to make sure that callbacks get the proper timestamps
    // when executed. For non-jest environments we define requestAnimationFrame in setupRequestAnimationFrame
    // @ts-ignore TypeScript uses Node definition for rAF, setTimeout, etc which returns a Timeout object rather than a number
    global.requestAnimationFrame = callback => {
      return setTimeout(() => callback(performance.now()), 0);
    };
  }

  const capturableConsole = console;
  (0, _threads.runOnUIImmediately)(() => {
    'worklet'; // setup error handler

    global.ErrorUtils = {
      reportFatalError: error => {
        (0, _threads.runOnJS)(_errors.reportFatalErrorOnJS)({
          message: error.message,
          stack: error.stack
        });
      }
    }; // setup console
    // @ts-ignore TypeScript doesn't like that there are missing methods in console object, but we don't provide all the methods for the UI runtime console version

    global.console = {
      debug: (0, _threads.runOnJS)(capturableConsole.debug),
      log: (0, _threads.runOnJS)(capturableConsole.log),
      warn: (0, _threads.runOnJS)(capturableConsole.warn),
      error: (0, _threads.runOnJS)(capturableConsole.error),
      info: (0, _threads.runOnJS)(capturableConsole.info)
    };

    if (!IS_JEST) {
      (0, _threads.setupSetImmediate)();
      setupRequestAnimationFrame();
    }
  })();
}
//# sourceMappingURL=initializers.js.map