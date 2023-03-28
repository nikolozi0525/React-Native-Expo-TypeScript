import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ImageButton = () => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image
          style={styles.thumbs}
          source={require("../../assets/images/image4.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "95%",
    // height: 250,
    marginLeft: 20,
    marginBottom: 30,
    borderRadius: 5,
  },
  thumbs: {
    width: "100%",
    height: 320,
    borderRadius: 10,
  },
});

export default ImageButton;
