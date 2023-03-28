import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  title: string;
};

const AddButton = (props: Props) => {
  const { title } = props;
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
  return count == 0 ? (
    <Animated.View style={styles.sb_container}>
      <TouchableOpacity style={styles.plusbutton} onPress={increaseCount}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  ) : (
    <Animated.View style={styles.container}>
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
