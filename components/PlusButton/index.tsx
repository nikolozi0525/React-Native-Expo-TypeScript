import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useRef } from "react";

import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";

type Props = {
  title: string;
  onAdd: Function;
};

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const FadeInView: React.FC<FadeInViewProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const PlusButton = (props: Props) => {
  const { title } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.plusbutton}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
export default PlusButton;
