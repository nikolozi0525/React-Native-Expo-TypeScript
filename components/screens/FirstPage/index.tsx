import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import HeadTitle from "../../HeadTitle";
import { useNavigation } from "expo-router";

const FirstPage = () => {
  const navigator: any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <HeadTitle>{"Affordabel Meals."}</HeadTitle>
        <HeadTitle>{"Cooked for you."}</HeadTitle>
        <View style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 16 }}>
            {"Fresh meals created with Top Chefs."}
          </Text>
          <Text style={{ fontSize: 16 }}>
            {"Cooked by us. Delivered to you."}
          </Text>
        </View>
      </View>

      <View style={styles.select}>
        <TouchableOpacity
          onPress={() => {
            navigator.push("setaddress");
          }}
        >
          <Text
            style={{ fontWeight: "bold", color: "white", alignSelf: "center" }}
          >
            {"SELECT ADDRESS"}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.browse}>
        <TouchableOpacity>
          <Text
            style={{ fontWeight: "bold", color: "black", alignSelf: "center" }}
          >
            {"BROWSE AS GUEST"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fffff6",
  },
  title: {
    top: "30%",
    color: "white",
    // alignSelf: "center",
    justifyContent: "center",
  },
  select: {
    backgroundColor: "#333333",
    padding: 15,
    borderRadius: 5,
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: "20%",
  },
  browse: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    width: "90%",
    alignSelf: "center",
    position: "absolute",
    bottom: "10%",
  },
});

export default FirstPage;
