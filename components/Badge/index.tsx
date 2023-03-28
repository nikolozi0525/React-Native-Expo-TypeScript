import { StyleSheet, Text, View } from "react-native";

import React from "react";

type Props = {
  children?: any;
};

const Badge = (props: Props) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.wrapper}> {children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "baseline",
    borderRadius: 15,
    backgroundColor: "black",
  },
  wrapper: {
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});

export default Badge;
