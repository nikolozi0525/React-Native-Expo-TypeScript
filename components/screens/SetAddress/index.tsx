import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import OneSelect from "../../OneSelect/index";
import { useNavigation } from "expo-router";
import { useState } from "react";

type Option = {
  index: number;
  title: string;
};
const options: Array<Option> = [
  {
    index: 1,
    title: "Home",
  },
  {
    index: 2,
    title: "Workplace",
  },
  {
    index: 3,
    title: "Other",
  },
];

const SetAddress = () => {
  const [type, setType] = useState(1);
  const address = "a";
  const [detailed, setDetail] = useState("");
  const navigator: any = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.sorry}>
        <Text>
          {
            "We need your address to validate if we serve your area. Since we are just getting started, areas will be limited. Sorry!"
          }
        </Text>
      </View>
      <View style={styles.type}>
        <Text style={styles.title}>{"Address type"}</Text>
        <View style={{ width: "70%" }}>
          <OneSelect value={type} onSelect={setType} options={options} />
        </View>
      </View>
      <View style={styles.type}>
        <Text style={styles.title}>{"Delivery To"}</Text>
        <View>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => {
              navigator.push("searchAddress");
            }}
          >
            <TextInput
              editable={false}
              value=""
              placeholder="Select your address"
              style={styles.select}
            />
            <FontAwesome name="map-marker" size={18} style={styles.location} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <TextInput
            placeholder="Additional Details/Floor/Entrance"
            style={styles.detailed}
            onChangeText={setDetail}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#333333",
          paddingVertical: 15,
          borderRadius: 5,
          width: "90%",
          alignSelf: "center",
          position: "absolute",
          bottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigator.navigate("Home")}>
          <Text
            style={{ color: "white", fontWeight: "bold", alignSelf: "center" }}
          >
            {"SAVE ADDRESS"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fffffe",
    height: "100%",
  },
  sorry: {
    paddingHorizontal: "10%",
    alignSelf: "center",
    backgroundColor: "#eeeeee",
    paddingVertical: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  type: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  select: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#fafadd",
    flexDirection: "row",
    paddingVertical: 10,
    paddingLeft: 5,
    borderRadius: 5,
  },
  location: {
    color: "#555555",
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    right: 5,
  },
  detailed: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#fafadd",
    paddingVertical: 10,
    paddingLeft: 5,
    borderRadius: 5,
  },
});

export default SetAddress;
