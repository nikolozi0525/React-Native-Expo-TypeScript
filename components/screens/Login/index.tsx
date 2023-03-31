import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import HeadTitle from "../../HeadTitle";
import StyledInput from "../../StyeldInput";
import { useNavigation } from "expo-router";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secure, setSecure] = useState(true);

  const navigator: any = useNavigation();
  const onSubmit = () => {
    //Validate & submit
    navigator.push("signup");
  };

  return (
    <View style={{ backgroundColor: "#fffffe", height: "100%" }}>
      <HeadTitle>Welcome back</HeadTitle>
      <View>
        <StyledInput
          value={email}
          onChange={setEmail}
          placeholder="Email"
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

      <Text style={styles.forgot}>
        {"Forgot Password "}
        <Text
          style={styles.reset}
          onPress={() => {
            alert("contact server");
          }}
        >
          {"Reset Password"}
        </Text>
      </Text>
      <View style={styles.login}>
        <TouchableOpacity onPress={onSubmit}>
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "bold" }}
          >
            {"LOGIN"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  password: {
    marginTop: 30,
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
  login: {
    marginTop: "auto",
    paddingVertical: 15,
    backgroundColor: "#333333",
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

export default Login;
