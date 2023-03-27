import {
  Animated,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

interface Position {
  position?: string | "relative";
  top?: number | 0;
  left?: number | 0;
  right?: number | 0;
  bottom?: number | 0;
}

type Props = {
  btposition: any;
  title: string;
};

const AddButton = (props: Props) => {
  const { btposition } = props;
  const [count, setCount] = useState(0);
  const translate_1 = useRef(new Animated.Value(0)).current;
  const translate_2 = useRef(new Animated.Value(1)).current;

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    if (count == 1) {
      Animated.timing(translate_1, {
        toValue: 1,
        useNativeDriver: true,
        duration: 100,
        easing: Easing.ease,
      }).start();
    } else
      Animated.timing(translate_2, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
        easing: Easing.ease,
      }).start();
  }, [count]);
  const combineStyles = StyleSheet.flatten([
    styles.container,
    { ...btposition },
  ]);
  // if (count == 0)
  //   return (

  //   );
  // else
  return count == 0 ? (
    <Animated.View
      style={[
        styles.sb_container,
        { ...btposition },
        {
          // transform: [
          //   {
          //     translateX: translate_1.interpolate({
          //       inputRange: [0, 1],
          //       outputRange: [0, -100],
          //     }),
          //   },
          //   {
          //     translateX: translate_2.interpolate({
          //       inputRange: [0, 1],
          //       outputRange: [0, 100],
          //     }),
          //   },
          // ],
        },
      ]}
    >
      <TouchableOpacity style={styles.plusbutton} onPress={increaseCount}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </Animated.View>
  ) : (
    <Animated.View
      style={[
        combineStyles,
        {
          width: translate_1.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "100%"],
          }),
        },
        {
          width: translate_2.interpolate({
            inputRange: [0, 1],
            outputRange: [240, 0],
          }),
        },
      ]}
    >
      <TouchableOpacity onPress={decreaseCount} style={styles.lbutton}>
        <Text style={styles.myfont}>{"-"}</Text>
      </TouchableOpacity>

      <View style={styles.middle}>
        <Text style={styles.myfont}>{count}</Text>
      </View>

      <TouchableOpacity onPress={increaseCount} style={styles.rbutton}>
        <Text style={styles.myfont}>{"+"}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sb_container: {
    flex: 1,
  },
  container: {
    flex: 0.3,
    flexDirection: "row",
    backgroundColor: "white",
    borderColor: "black",
    flexWrap: "wrap",
    width: 200,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  myfont: {
    fontSize: 20,
    fontWeight: "bold",
  },
  lbutton: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    width: "25%",
    paddingVertical: 7,
    alignItems: "center",
  },
  rbutton: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    width: "25%",
    paddingVertical: 7,
    alignItems: "center",
  },
  middle: {
    width: "50%",
    paddingVertical: 7,
    alignItems: "center",
  },
  plusbutton: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "black",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default AddButton;
