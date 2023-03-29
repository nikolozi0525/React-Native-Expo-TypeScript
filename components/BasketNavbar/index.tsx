import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BasketNavbar = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>{"Basket"}</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={styles.time}>
          Kitchen's Open 09:00 - 12:30 and 15:00 - 19:00
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  myfont: {
    fontSize: 20,
  },
  time: {
    fontSize: 14,
    color: "grey",
    textAlign: "center",
  },
  arrow: {
    marginLeft: 10,
  },
});

export default BasketNavbar;
