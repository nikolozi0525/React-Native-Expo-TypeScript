import {
  Dimensions,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import Question from "../../Quetion";
import StyledInput from "../../StyeldInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";
import { useState } from "react";

const foods = [
  {
    id: "45g43o5i",
    title: "appetizers & Salads",
    src: "../../../assets/images/appetizer.png",
    bgcolor: "#b3ffb3",
  },
  {
    id: "45g4kdldfi",
    title: "Main dishes",
    src: "../../../assets/images/maindish.jpg",
    bgcolor: "#ffffb3",
  },
  {
    id: "459gs5i",
    title: "Nigiri & Sashimi",
    src: "../../../assets/images/sashimi.jpg",
    bgcolor: "tomato",
  },
  {
    id: "wfg43o5i",
    title: "Sushi mix",
    src: "../../../assets/images/sushi.jpg",
    bgcolor: "#ff9933",
  },
];

const answers = [
  {
    id: "dsfa23",
    question: "What is a ghost kitchen?",
    answer:
      "Wir haben alles unnötige gestrichen - keinen Gastraum, keine Stühle und Tische. Die Gerichte werden in den eigenen Küchen-Hubs gekocht. Dank modernster Gastro-Technologie können wir das, was vorher undenkbar gewesen ist: Gutes Essen preiswert liefern.",
  },
  {
    id: "98sgn4",
    question: "When will the delivery area be expanded?",
    answer:
      "Wir haben alles unnötige gestrichen - keinen Gastraum, keine Stühle und Tische. Die Gerichte werden in den eigenen Küchen-Hubs gekocht. Dank modernster Gastro-Technologie können wir das, was vorher undenkbar gewesen ist: Gutes Essen preiswert liefern.",
  },
  {
    id: "90xrtvw4",
    question: "What is Vital",
    answer:
      "Vytal bietet ein Mehrwegsystem und unser Partner für eine nachhaltige Mehrweg-Lösung. Dafür benötigst du die Vytal App. Die Ausleihe ist bei Rückgabe innerhalb von 14 Tagen kostenlos. Die Behälter kannst du bei allen teilnehmenden Partnern zurückgeben.",
  },
];

const PrivacyPolicy = () => {
  const navigator: any = useNavigation();
  const questionAnswer = () => {
    return answers.map((a) => {
      return <Question question={a.question} answer={a.answer} key={a.id} />;
    });
  };
  const [modalVisible, setModalVisible] = useState(true);
  const [key, setKey] = useState("");

  const viewCards = () => {
    return foods.map((f) => {
      return (
        <View
          key={f.id}
          style={{
            backgroundColor: f.bgcolor,
            borderRadius: 10,
            width: Dimensions.get("window").width * 0.8,
            height: Dimensions.get("window").width * 1.2,
            alignSelf: "center",
            // justifyContent: "center",
            marginRight: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 28,
              marginVertical: 20,
              marginBottom: 100,
            }}
          >
            {f.title}
          </Text>
          <Image
            source={{ uri: f.src }}
            style={{
              width: Dimensions.get("window").width * 0.4,
              height: Dimensions.get("window").width * 0.4,
              alignSelf: "center",
              alignContent: "center",
              borderRadius: Dimensions.get("window").width * 0.2,
              // marginVertical: 40,s
            }}
          />
        </View>
      );
    });
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fffaf2",
            marginTop: 20,
            borderTopEndRadius: 10,
            padding: 15,
          }}
        >
          <Pressable
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <FontAwesome
              name="times"
              size={20}
              style={{
                marginTop: 20,
                marginLeft: "auto",
                marginRight: 20,
              }}
            />
          </Pressable>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 26, fontWeight: "bold", marginTop: 40 }}>
              Data protection{" "}
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 30 }}>
              1 Introduction
            </Text>
            <Text style={styles.textfont}>
              In the following we inform you about the processing of personal
              data during use
            </Text>
            <Text style={styles.textfont}>our website sushininja.de </Text>
            <Text style={styles.textfont}>our social media</Text>
            <Text style={styles.textfont}>
              profiles. Personal data is all data that can be related to a
              specific natural person, e.g. their name or IP address.
            </Text>
            <Text style={{ fontSize: 18, marginTop: 20 }}>
              1.1 Contact Information
            </Text>
            <Text style={styles.textfont}>
              Responsible according to art. 4 Para. 7 EU General Data Protection
              Regulation (GDPR) is Circus Kitchens GmbH, Hongkongstrabe 6,
              29=0457 Hamburg, Germany, E-Mail: datenschutz@circuskithchen.com.
              We are legally represented by Nikolas Bullwinkel. Our data
              protection officer is via heyData GmbH, Schutzenstrabe 5, 10117
              Berlin
            </Text>
          </View>
        </View>
      </Modal>
      <View>
        <View style={styles.topBar}>
          <Text style={{ fontSize: 16, color: "white", marginRight: 5 }}>
            Want to work for Sushi Ninja?
          </Text>
          <View style={styles.apply}>
            <TouchableOpacity>
              <Text>Apply here</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#fff9f1",
            padding: 10,
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../../../assets/images/ninja-logo.png")}
            style={{
              width: 50,
              height: 50,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontSize: 24,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            NINJA
          </Text>
          <TouchableOpacity style={{ marginLeft: 80 }}>
            <View
              style={{
                backgroundColor: "black",
                alignSelf: "center",
                padding: 10,
                paddingHorizontal: 15,
                borderRadius: 20,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white" }}>Download App now</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ backgroundColor: "#fff9f1" }}>
        <View
          style={{
            width: 300,
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Sushi cooks and delivers. Fresh. Inexpensive. Easy.
          </Text>
          <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>
            Download the app now
          </Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity style={{ marginRight: 5 }}>
              <View
                style={{
                  backgroundColor: "black",
                  alignSelf: "center",
                  padding: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "white" }}>iOS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "black",
                  alignSelf: "center",
                  padding: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "white" }}>Android</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Image
          source={require("../../../assets/images/brand.png")}
          style={{
            width: "90%",
            height: Dimensions.get("window").width / 1.5,
            alignSelf: "center",
            borderRadius: 20,
            marginTop: 20,
          }}
        />
        <View style={{ justifyContent: "center", marginTop: 20 }}>
          <Text
            style={{ alignSelf: "center", fontSize: 30, fontWeight: "bold" }}
          >
            Why Ninja?
          </Text>
          <Image
            source={require("../../../assets/images/salad.png")}
            style={{
              alignSelf: "center",
              marginTop: 30,
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              alignSelf: "center",
              marginVertical: 10,
            }}
          >
            Fresh for you
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 18,
              width: "70%",
              alignSelf: "center",
              marginVertical: 10,
            }}
          >
            We cook fresh every day. Our cooks prepare the best ingredients in
            small kitchens. Whether Healthy Greens or Comfy Soul Food, Circus
            offers something for every day, every situation and every taste.
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              alignSelf: "center",
              marginVertical: 10,
            }}
          >
            Did you know already?
          </Text>
          <Text
            style={{
              textAlign: "center",
              width: "70%",
              alignSelf: "center",
              fontSize: 18,
              marginBottom: 30,
            }}
          >
            We work from our own small kitchens. And because we control the
            entire supply chain, the quality is right - from purchasing to
            preparation to delivery.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#dedede",
            width: "80%",
            padding: 30,
            alignSelf: "center",
            borderRadius: 5,
          }}
        >
          <Text
            style={{ fontSize: 38, fontWeight: "bold", textAlign: "center" }}
          >
            The Kitchen of the future is an app.
          </Text>
          <Text
            style={{ textAlign: "center", fontSize: 18, marginVertical: 20 }}
          >
            Ninja cooks freshly for you every day and delivers inexpensive
            dishes directly to your home.
          </Text>

          <View>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "black",
                  alignSelf: "center",
                  padding: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "white" }}>Download app now</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../../assets/images/app.png")}
            style={{
              width: "50%",
              height: 250,
              alignSelf: "center",
              marginVertical: 20,
              resizeMode: "contain",
            }}
          />
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ textAlign: "center", fontSize: 32 }}>
            Our service area
          </Text>
          <Image
            source={require("../../../assets/images/map.png")}
            style={{
              width: "80%",
              height: 200,
              alignSelf: "center",
              marginVertical: 20,
              resizeMode: "stretch",
            }}
          />
          <Text
            style={{ textAlign: "center", fontSize: 26, marginVertical: 10 }}
          >
            Not in the service area?
          </Text>
          <TouchableOpacity onPress={() => navigator.push("signin")}>
            <View
              style={{
                backgroundColor: "black",
                alignSelf: "center",
                padding: 10,
                paddingHorizontal: 15,
                borderRadius: 20,
                marginTop: 10,
              }}
            >
              <Text style={{ color: "white" }}>Sign Up Now</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontSize: 30, alignSelf: "center", marginBottom: 20 }}>
            Explore our dishes
          </Text>
          <ScrollView
            horizontal
            pagingEnabled
            alwaysBounceHorizontal={false}
            style={{
              width: "90%",
              alignSelf: "center",
              marginBottom: 40,
            }}
          >
            {viewCards()}
          </ScrollView>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.title}>Questions?</Text>
          <Text style={styles.title}>We are here to help</Text>
        </View>
        <View style={{ width: "80%", alignSelf: "center", marginBottom: 50 }}>
          {questionAnswer()}
        </View>
        <View style={{ alignSelf: "center", width: "80%", marginBottom: 100 }}>
          <Image
            source={require("../../../assets/images/download.png")}
            style={{
              height: 150,
              width: 150,
              alignSelf: "center",
            }}
          />
          <Text style={styles.title}>
            Download the app now and order directly
          </Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity style={{ marginRight: 5 }}>
              <View
                style={{
                  backgroundColor: "black",
                  alignSelf: "center",
                  padding: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "white" }}>iOS</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "black",
                  alignSelf: "center",
                  padding: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                  marginTop: 10,
                }}
              >
                <Text style={{ color: "white" }}>Android</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomBar}>
          <Image
            source={require("../../../assets/images/ninja-logo.png")}
            style={{
              width: 50,
              height: 50,
              tintColor: "white",
            }}
          />
          <Text
            style={{
              fontSize: 25,
              alignSelf: "center",
              color: "white",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            NINJA
          </Text>
          <FontAwesome
            name="instagram"
            size={25}
            color={"white"}
            style={{ marginLeft: "auto", alignSelf: "center" }}
          />
          <FontAwesome
            name="linkedin"
            size={25}
            color={"white"}
            style={{ marginLeft: 20, alignSelf: "center" }}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#222222",
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  bottomBar: {
    backgroundColor: "#222222",
    padding: 10,
    color: "white",
    flexDirection: "row",
  },
  apply: {
    backgroundColor: "#fff9f1",
    borderRadius: 15,
    padding: 5,
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
  },
  flexrow: {
    flexDirection: "row",
    padding: 10,
  },
  textfont: {
    fontSize: 16,
  },
});

export default PrivacyPolicy;
