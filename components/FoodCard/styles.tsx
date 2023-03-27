import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "50%",
    // height: 250,
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 30,
  },
  thumbs: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.61,
    borderRadius: 8,
    resizeMode: "stretch",
  },
  description: {
    height: 80,
    padding: 10,
    backgroundColor: "#fffff6",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  text_1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  text_2: {
    fontSize: 20,
  },
});

export default styles;
