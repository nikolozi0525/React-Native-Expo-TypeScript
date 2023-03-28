import { Animated, Easing, Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useRef } from "react";

type Props = {
  uri: any;
};
const ImageView = (props: Props) => {
  const { uri } = props;
  console.log(uri);
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  });
  return (
    <View style={styles.card}>
      <Animated.Image
        style={{
          width: "100%",
          height: undefined,
          aspectRatio: 1,
          transform: [
            {
              scaleX: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
            {
              scaleY: animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        }}
        source={uri}
        resizeMode={"cover"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    // height: 250,
  },
});

export default ImageView;
