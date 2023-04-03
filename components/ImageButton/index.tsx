import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

const ImageButton = () => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image
          style={{
            width: "100%",
            borderRadius: 5,
            height: Dimensions.get("window").width / 2 - 10,
            resizeMode: "stretch",
          }}
          source={require("../../assets/images/image4.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 30,
    borderRadius: 2,
  },
});

export default ImageButton;
