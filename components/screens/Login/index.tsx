import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import BackButton from "../../BackButton/index";
import { FontAwesome } from "@expo/vector-icons";
import HeadTitle from "../../HeadTitle";
import { SafeAreaView } from "react-native-safe-area-context";
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
    navigator.push("Home");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fffffe", height: "100%" }}>
      <View style={{ position: "absolute", top: 20, left: 20 }}>
        <BackButton />
      </View>
      <View style={{ marginTop: 100 }}>
        <HeadTitle>Welcome back</HeadTitle>
      </View>
      <View style={{ paddingHorizontal: 5, marginTop: 20 }}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  password: {
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  show: {
    position: "absolute",
    right: 15,
    alignSelf: "center",
  },
  forgot: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  reset: {
    borderBottomColor: "#666666",
    borderBottomWidth: 2,
    fontWeight: "bold",
  },
  login: {
    marginTop: "auto",
    marginBottom: 20,
    paddingVertical: 20,
    backgroundColor: "#333333",
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

export default Login;
