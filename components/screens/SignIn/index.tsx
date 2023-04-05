import { StyleSheet, Text, View } from "react-native";

import BackButton from "../../BackButton/index";
import { FontAwesome } from "@expo/vector-icons";
import HeadTitle from "../../HeadTitle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

const SignIn = () => {
  const navigator: any = useNavigation();

  return (
    <View style={{ height: "100%", backgroundColor: "#fff9f1" }}>
      <View style={{ position: "absolute", left: 20, top: 20 }}>
        <BackButton />
      </View>

      <View style={{ top: "30%" }}>
        <HeadTitle>Become a free</HeadTitle>
        <HeadTitle>Member of Ninja</HeadTitle>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingTop: 10,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Affordable meals. Cooked for you
        </Text>
      </View>

      <View
        style={{
          alignSelf: "center",
          width: "95%",
          paddingVertical: 20,
          backgroundColor: "white",
          borderRadius: 5,
          paddingLeft: 10,
          alignContent: "center",
          marginTop: 400,
        }}
      >
        <TouchableOpacity onPress={() => navigator.push("signup")}>
          <FontAwesome
            name="envelope-o"
            size={18}
            style={{ position: "absolute" }}
          />
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            SIGN UP WITH EMAIL
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: "center",
          width: "95%",
          paddingVertical: 20,
          backgroundColor: "white",
          borderRadius: 5,
          paddingLeft: 10,
          alignContent: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          <FontAwesome
            name="google"
            size={18}
            style={{ position: "absolute" }}
          />
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              fontWeight: "bold",
            }}
          >
            CONTINUE WITH GOOGLE
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: "center",
          width: "95%",
          paddingVertical: 20,
          backgroundColor: "black",
          borderRadius: 5,
          paddingLeft: 10,
          alignContent: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          <FontAwesome
            name="apple"
            size={18}
            style={{ position: "absolute", color: "white" }}
          />
          <Text
            style={{
              textAlign: "center",
              alignSelf: "center",
              fontWeight: "bold",
              color: "white",
            }}
          >
            SIGN UP WITH EMAIL
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigator.push("login")}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            ALREADY HAVE AN ACCOUNT?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignIn;
