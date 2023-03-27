/* global _updatePropsPaper _updatePropsFabric */
import { processColor } from './Colors';
import { makeShareable, isConfigured } from './core';
import { _updatePropsJS } from './js-reanimated';
import { shouldBeUseWeb } from './PlatformChecker';
// copied from react-native/Libraries/Components/View/ReactNativeStyleAttributes
export const colorProps = ['backgroundColor', 'borderBottomColor', 'borderColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'borderStartColor', 'borderEndColor', 'color', 'shadowColor', 'textDecorationColor', 'tintColor', 'textShadowColor', 'overlayColor'];
export const ColorProperties = !isConfigured() ? [] : makeShareable(colorProps);
let updatePropsByPlatform;

if (shouldBeUseWeb()) {
  updatePropsByPlatform = (_, updates, maybeViewRef) => {
    'worklet';

    if (maybeViewRef) {
      maybeViewRef.items.forEach((item, _) => {
        _updatePropsJS(updates, item);
      });
    }
  };
} else {
  if (global._IS_FABRIC) {
    updatePropsByPlatform = (viewDescriptors, updates, _) => {
      'worklet';

      for (const key in updates) {
        if (ColorProperties.indexOf(key) !== -1) {
          updates[key] = processColor(updates[key]);
        }
      }

      viewDescriptors.value.forEach(viewDescriptor => {
        _updatePropsFabric(viewDescriptor.shadowNodeWrapper, updates);
      });
    };
  } else {
    updatePropsByPlatform = (viewDescriptors, updates, _) => {
      'worklet';

      for (const key in updates) {
        if (ColorProperties.indexOf(key) !== -1) {
          updates[key] = processColor(updates[key]);
        }
      }

      viewDescriptors.value.forEach(viewDescriptor => {
        _updatePropsPaper(viewDescriptor.tag, viewDescriptor.name || 'RCTView', updates);
      });
    };
  }
}

export const updateProps = updatePropsByPlatform;
export const updatePropsJestWrapper = (viewDescriptors, updates, maybeViewRef, animatedStyle, adapters) => {
  adapters.forEach(adapter => {
    adapter(updates);
  });
  animatedStyle.current.value = { ...animatedStyle.current.value,
    ...updates
  };
  updateProps(viewDescriptors, updates, maybeViewRef);
};
export default updateProps;
//# sourceMappingURL=UpdateProps.js.map