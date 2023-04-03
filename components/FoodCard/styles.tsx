import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "50%",
    // height: 250,
    paddingRight: 5,
    paddingLeft: 5,
    marginBottom: 30,
  },
  thumbs: {
    width: "100%",
    aspectRatio: 1.5,
    borderRadius: 8,
    // resizeMode: "stretch",
  },
  description: {
    height: 60,
    padding: 5,
    backgroundColor: "#fffff6",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  text_1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text_2: {
    fontSize: 16,
  },
});

export default styles;
