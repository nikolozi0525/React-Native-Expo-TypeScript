import { StyleSheet, Text, View } from "react-native";

import React from "react";
import type { ViewStyle } from "react-native";

interface Position {
  position?: string | "relative";
  top?: number | 0;
  left?: number | 0;
  right?: number | 0;
  bottom?: number | 0;
}
type Props = {
  children?: any;
  badge_pos?: any;
};

const Badge = (props: Props) => {
  const { children, badge_pos } = props;
  return (
    <View style={[styles.container, { ...badge_pos }]}>
      <Text style={styles.wrapper}> {children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignSelf: "baseline",
  },
  wrapper: {
    borderRadius: 15,
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
});

export default Badge;
