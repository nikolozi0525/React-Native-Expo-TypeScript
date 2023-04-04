import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    //Search action here
  }, [key]);

  return (
    <View style={{ flexDirection: "row", width: "120%" }}>
      <TextInput
        value={key}
        onChangeText={setKey}
        style={styles.input}
        autoFocus
        placeholder="Please input your address"
      />
      <TouchableOpacity
        style={{
          marginLeft: 30,
          alignSelf: "center",
        }}
        onPress={() => {
          setKey("");
        }}
      >
        <Text>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    padding: 10,
    width: "100%",
  },
});

export default SearchBar;
