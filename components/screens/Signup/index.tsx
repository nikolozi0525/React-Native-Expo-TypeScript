import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import HeadTitle from "../../HeadTitle";
import Radio from "../../Radio";
import StyledInput from "../../StyeldInput";
import { useNavigation } from "expo-router";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [select, onSelect] = useState(false);

  const navigator: any = useNavigation();
  const onSubmit = () => {
    //Validate & submit
  };

  return (
    <View style={{ backgroundColor: "#fffffe", height: "100%" }}>
      <HeadTitle>Create your account</HeadTitle>
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <StyledInput
          value={fname}
          onChange={setFname}
          placeholder="First Name"
        />
        <StyledInput
          value={lname}
          onChange={setLname}
          placeholder="Last Name"
        />
      </View>

      <View>
        <StyledInput
          value={email}
          onChange={setEmail}
          placeholder="Email address"
          textContentType="emailAddress"
        />
      </View>
      <View style={styles.password}>
        <StyledInput
          value={password}
          onChange={setPassword}
          placeholder="Password"
          textContentType="password"
          secureTextEntry={secure}
        />
        <TouchableOpacity
          onPress={() => setSecure(!secure)}
          style={styles.show}
        >
          {secure ? (
            <FontAwesome name="eye-slash" size={16} />
          ) : (
            <FontAwesome name="eye" size={16} />
          )}
        </TouchableOpacity>
      </View>
      <View style={{ padding: 20, width: 100 }}>
        <Radio selected={select} onChange={onSelect}>
          <Text
            style={{
              alignItems: "center",
              width: 320,
            }}
          >
            {
              "I would like to subscribe to receive notices from SushiNinja for personalized campaigns, advertising and promotions"
            }
          </Text>
        </Radio>
      </View>
      <View style={styles.forgot}></View>
      <View style={styles.signup}>
        <TouchableOpacity onPress={onSubmit}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            {"SIGN UP"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  password: {
    marginTop: 20,
    flexDirection: "row",
  },
  show: {
    position: "absolute",
    right: 15,
    alignSelf: "center",
  },
  forgot: {
    textAlign: "center",
    marginTop: 20,
  },
  reset: {
    borderBottomColor: "#666666",
    borderBottomWidth: 2,
    fontWeight: "bold",
  },
  signup: {
    marginTop: "auto",
    paddingVertical: 15,
    backgroundColor: "#333333",
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

export default Signup;
