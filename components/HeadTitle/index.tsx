import { StyleSheet, Text, View } from "react-native";
import { useCallback, useEffect } from "react";

import { useFonts } from "expo-font";

type Props = {
  children?: any;
};
const HeadTitle = (props: Props) => {
  const { children } = props;
  const [fontsLoaded, error] = useFonts({
    LibreBodoni: require("../../assets/fonts/LibreBodoni-VariableFont_wght.ttf"),
  });
  useEffect(() => {
    if (error) console.log(error);
  }, [error]);
  return (
    <View>
      <Text style={[styles.title, { fontFamily: "LibreBodoni" }]}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 16,
    marginTop: 5,
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default HeadTitle;
