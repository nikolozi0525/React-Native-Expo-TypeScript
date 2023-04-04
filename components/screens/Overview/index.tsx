import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useEffect, useState } from "react";

import Categories from "../../Categories";
import Favorite from "../../Favorites";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FoodCard from "../../FoodCard/index";
import Highlights from "../../Highlights";
import ImageButton from "../../ImageButton";
import ImageView from "../../ImageView";
import ListView from "../../Listview";
import OrderButton from "../../OrderButton";
import React from "react";
import StyledInput from "../../StyeldInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

const Overview = () => {
  const navigation: any = useNavigation();

  const onClick = () => {
    navigation.push("Basket");
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [key, setKey] = useState("");

  const doModal = () => {
    setModalVisible(true);
  };

  const [listValue, setListValue] = useState(0);
  useEffect(() => {
    switch (listValue) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        setModalVisible(true);
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
      default:
    }
  }, [listValue]);

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
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
                  setListValue(0);
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
              <View style={{ padding: 15, marginTop: 40 }}>
                <Text style={{ fontSize: 30 }}>Hi there</Text>
                <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                  How can we help?
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  padding: 15,
                  shadowColor: "#999999",
                  shadowOpacity: 0.2,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  borderRadius: 5,
                }}
              >
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#dddddd",
                      borderBottomWidth: 1,
                      paddingBottom: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>Messages</Text>
                    <FontAwesome
                      name="comment"
                      size={18}
                      style={{ marginLeft: "auto" }}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={{ flexDirection: "row", paddingTop: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>Help</Text>
                    <FontAwesome
                      name="question-circle"
                      size={18}
                      style={{ marginLeft: "auto" }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  padding: 15,
                  backgroundColor: "white",
                  marginTop: 10,
                  shadowColor: "#999999",
                  shadowOpacity: 0.2,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  borderRadius: 5,
                }}
              >
                <TouchableOpacity>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        Send us a message
                      </Text>
                      <Text style={{ color: "#888888" }}>
                        We'll back online later today
                      </Text>
                    </View>
                    <FontAwesome
                      name="send"
                      size={18}
                      style={{
                        marginLeft: "auto",
                        alignSelf: "center",
                        justifyContent: "center",
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  marginTop: 10,
                  padding: 15,
                  shadowColor: "#999999",
                  shadowOpacity: 0.2,
                  shadowOffset: {
                    width: 1,
                    height: 1,
                  },
                  borderRadius: 5,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <StyledInput
                    value={key}
                    onChange={setKey}
                    placeholder="Search for help"
                  />
                  <FontAwesome
                    name="search"
                    size={18}
                    style={{
                      alignSelf: "center",
                      position: "absolute",
                      right: 20,
                    }}
                  />
                </View>
                <View>
                  <TouchableOpacity style={styles.flexrow}>
                    <Text>Delivery Options</Text>
                    <FontAwesome
                      name="chevron-right"
                      size={12}
                      style={{ alignSelf: "center", marginLeft: "auto" }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.flexrow}>
                    <Text>About Circus</Text>
                    <FontAwesome
                      name="chevron-right"
                      size={12}
                      style={{ alignSelf: "center", marginLeft: "auto" }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.flexrow}>
                    <Text>Refund</Text>
                    <FontAwesome
                      name="chevron-right"
                      size={12}
                      style={{ alignSelf: "center", marginLeft: "auto" }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.flexrow}>
                    <Text>Service Areas</Text>
                    <FontAwesome
                      name="chevron-right"
                      size={12}
                      style={{ alignSelf: "center", marginLeft: "auto" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <Favorite />
          <Highlights title="Highlights" />
          <Categories title="Categories" />
          <ImageButton />
          <ListView value={listValue} onItemClick={setListValue} />
        </View>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 10, width: "100%" }}>
        <OrderButton
          title={"VIEW ORDER"}
          price={9.0}
          count={1}
          onClick={onClick}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffffe",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  flexrow: {
    flexDirection: "row",
    padding: 10,
  },
});

export default Overview;
