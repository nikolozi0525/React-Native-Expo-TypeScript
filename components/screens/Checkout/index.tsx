import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import { useEffect, useState } from "react";

import BasketNavbar from "../../BasketNavbar/index";
import { FontAwesome } from "@expo/vector-icons";
import OneSelect from "../../OneSelect";
import OrderButton from "../../OrderButton/index";
import RadioButton from "../../RadioButton/index";
import StyledInput from "../../StyeldInput/index";

type Option = {
  index: number;
  title: string;
};

const options: Array<Option> = [
  {
    index: 1,
    title: "Delivery",
  },
  {
    index: 2,
    title: "Pick up",
  },
];
const timeOptions: Array<Option> = [
  {
    index: 1,
    title: "09:30",
  },
  {
    index: 2,
    title: "10:00",
  },
  {
    index: 3,
    title: "10:30",
  },
  {
    index: 4,
    title: "11:00",
  },
  {
    index: 5,
    title: "11:30",
  },
];

const tips: Array<Option> = [
  {
    index: 1,
    title: "0%",
  },
  {
    index: 2,
    title: "10%",
  },
  {
    index: 3,
    title: "15%",
  },
  {
    index: 4,
    title: "20%",
  },
];

const Checkout = () => {
  const price = {
    items: 24,
    tip: 0,
    fee: 2.5,
    total: 0,
  };

  const [text, changeText] = useState("");
  const [lname, changeLname] = useState("");
  const email = "abc123@def.com";
  const address = "Basselweg 73, Hamburg";
  const [selected, setSelected] = useState(1);
  const [deliverTime, setDeliverTime] = useState(1);
  const [tip, setTip] = useState(2);
  const navigator: any = useNavigation();

  const getTotalPrice = () => {
    price.tip = tip == 1 ? 0 : (price.items * tip * 5) / 100;
    return price.items + price.tip + price.fee;
  };
  useEffect(() => {
    price.tip = tip == 1 ? 0 : (price.items * tip * 5) / 100;
    price.total = price.items + price.tip + price.fee;
    // alert(price.tip);
  }, [tip]);

  return (
    <>
      <BasketNavbar title="Checkout" />
      <ScrollView style={{ backgroundColor: "#fffffe" }}>
        <View>
          <Text style={styles.headtitle}>{"Personal Info"}</Text>
        </View>
        <View style={styles.nameContainer}>
          <View style={{ paddingRight: 5, width: "50%" }}>
            <StyledInput
              placeholder="First name"
              value={text}
              onChange={changeText}
            />
          </View>
          <View style={{ paddingLeft: 5, width: "50%" }}>
            <StyledInput
              placeholder="Last name"
              value={lname}
              onChange={changeLname}
            />
          </View>
        </View>
        <View style={[styles.InputWithIcon, { marginTop: 10 }]}>
          <StyledInput
            placeholder="Email Address"
            value={email}
            onChange={changeText}
            editable={false}
          />
          <FontAwesome name="check" style={styles.checkIcon} />
        </View>
        <View style={styles.radio}>
          <RadioButton
            value={selected}
            onSelect={setSelected}
            options={options}
          />
        </View>
        <View>
          <Text style={styles.headtitle}>{"Delivery To"}</Text>
          <View style={styles.InputWithIcon}>
            <StyledInput
              placeholder="Address"
              value={address}
              onChange={changeText}
              editable={false}
            />
            <FontAwesome name="check" style={styles.checkIcon} />
          </View>
        </View>

        {/* Deliver Time

      param= deliverTime
      1: 9:30 ~ 5: 11:30
      
      */}
        <View style={{ marginTop: 10 }}>
          <Text style={styles.headtitle}>Delivered when?</Text>
          <View style={{ paddingHorizontal: 5 }}>
            <OneSelect
              value={deliverTime}
              onSelect={setDeliverTime}
              options={timeOptions}
            />
          </View>
        </View>
        {/* <Button title="click me" onPress={() => alert(selected)}></Button> */}
        <View style={{ marginTop: 30, paddingHorizontal: 10 }}>
          <TouchableOpacity style={styles.addVocher}>
            <Text style={{ fontWeight: "bold" }}>{"ADD VOCHER"}</Text>
          </TouchableOpacity>
        </View>

        {/**
         * param tip
         *
         * value
         * 1:0%   2:10%   3:15%  4:20%
         */}
        <View style={{ marginTop: 10, width: "80%" }}>
          <Text style={styles.headtitle}>Tip</Text>
          <View style={{ paddingHorizontal: 5 }}>
            <OneSelect value={tip} onSelect={setTip} options={tips} />
          </View>
          <Text style={{ fontSize: 12, marginLeft: "31%" }}>{"Default"}</Text>
        </View>

        <View>
          <Text style={styles.headtitle}>Order Summary</Text>
          <View style={styles.pricebox}>
            <View style={styles.priceItem}>
              <Text style={{ fontSize: 16 }}>{"Items"}</Text>
              <Text style={{ marginLeft: "auto", fontSize: 16 }}>
                {price.items}
                {"\u20AC"}
              </Text>
            </View>
            <View style={styles.priceItem}>
              <Text style={{ fontSize: 16 }}>{"Tip"}</Text>
              <Text style={{ marginLeft: "auto", fontSize: 16 }}>
                {tip == 1 ? 0 : (price.items * 5 * tip) / 100}
                {"\u20AC"}
              </Text>
            </View>
            <View style={styles.priceItem}>
              <Text style={{ fontSize: 16 }}>{"Delivery Fee"}</Text>
              <Text style={{ marginLeft: "auto", fontSize: 16 }}>
                {price.fee}
                {"\u20AC"}
              </Text>
            </View>

            <View style={[styles.totalprice, styles.priceItem]}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                {"Total"}
              </Text>
              <Text style={{ marginLeft: "auto", fontSize: 16 }}>
                {getTotalPrice()}
                {"\u20AC"}
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10, paddingTop: 0 }}>
              <Text style={{ fontSize: 12, color: "grey" }}>
                {"Including VAT"}
              </Text>
              <Text style={{ marginLeft: "auto", fontSize: 12 }}>
                {1.73}
                {"\u20AC"}
              </Text>
            </View>
          </View>

          <View style={{ paddingHorizontal: 5, marginVertical: 10 }}>
            <Text style={{ textAlign: "center", fontSize: 16 }}>
              {"By placing an order you agree to our "}
              <Text
                style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
                onPress={() => navigator.push("Home")}
              >
                terms and conditions
              </Text>
              {" and confirm that you have read our "}
              <Text
                style={{ borderBottomColor: "black", borderBottomWidth: 1 }}
                onPress={() => navigator.push("Home")}
              >
                privacy policy
              </Text>
            </Text>
          </View>
          <View style={{ position: "relative", marginTop: 10 }}>
            <OrderButton
              title="Pay & Order"
              onClick={() => {
                navigator.push("login");
              }}
              count={2}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    flex: 1,
  },
  InputWithIcon: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  radio: {
    marginTop: 10,
    alignSelf: "center",
  },
  checkIcon: {
    position: "absolute",
    right: 15,
    alignSelf: "center",
    justifyContent: "center",
    color: "#333333",
  },
  headtitle: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 18,
    marginVertical: 10,
  },
  addVocher: {
    backgroundColor: "#fffaf2",
    paddingVertical: 15,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  pricebox: {
    backgroundColor: "#fffaf2",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  priceItem: { flexDirection: "row", padding: 10 },
  totalprice: {
    borderTopColor: "#e2e2e2",
    borderTopWidth: 1,
  },
});

export default Checkout;
