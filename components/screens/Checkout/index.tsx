import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import OneSelect from "../../OneSelect";
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
  const email = "Austin.Byrne@teml.net";
  const address = "Basselweg 73, Hamburg";
  const [selected, setSelected] = useState(1);
  const [deliverTime, setDeliverTime] = useState(1);
  const [tip, setTip] = useState(2);

  useEffect(() => {
    price.tip = tip == 1 ? 0 : (price.items * tip * 5) / 100;
    price.total = price.items + price.tip + price.fee;
    // alert(price.tip);
  }, [tip]);

  return (
    <ScrollView>
      <View>
        <Text style={styles.headtitle}>{"Personal Info"}</Text>
      </View>
      <View style={styles.nameContainer}>
        <StyledInput
          placeholder="First name"
          value={text}
          onChange={changeText}
        />
        <StyledInput
          placeholder="Last name"
          value={lname}
          onChange={changeLname}
        />
      </View>
      <View style={styles.InputWithIcon}>
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

      {/* Deliver Time */}
      <View style={{ marginTop: 10 }}>
        <Text style={styles.headtitle}>Delivered when?</Text>
        <OneSelect
          value={deliverTime}
          onSelect={setDeliverTime}
          options={timeOptions}
        />
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
      <View style={{ marginTop: 10 }}>
        <Text style={styles.headtitle}>Tip</Text>
        <OneSelect value={tip} onSelect={setTip} options={tips} />
        <Text style={{ fontSize: 10, marginLeft: "25%" }}>{"Default"}</Text>
      </View>

      <View>
        <Text style={styles.headtitle}>Order Summary</Text>
        <View style={styles.pricebox}>
          <View style={styles.priceItem}>
            <Text>{"Items"}</Text>
            <Text style={{ marginLeft: "auto" }}>
              {price.items}
              {"\u20AC"}
            </Text>
          </View>
          <View style={styles.priceItem}>
            <Text>{"Tip"}</Text>
            <Text style={{ marginLeft: "auto" }}>
              {tip == 1 ? 0 : (price.items * 5 * tip) / 100}
              {"\u20AC"}
            </Text>
          </View>
          <View style={styles.priceItem}>
            <Text>{"Delivery Fee"}</Text>
            <Text style={{ marginLeft: "auto" }}>
              {price.fee}
              {"\u20AC"}
            </Text>
          </View>
          <View>
            <View style={styles.priceItem}>
              <Text style={{ fontWeight: "bold" }}>{"Total"}</Text>
              <Text style={{ marginLeft: "auto" }}>
                {price.total}
                {"\u20AC"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nameContainer: {
    flexDirection: "row",
  },
  InputWithIcon: {
    flexDirection: "row",
    marginTop: 5,
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
  },
  headtitle: {
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10,
  },
  addVocher: {
    backgroundColor: "#fffff6",
    paddingVertical: 10,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
  },
  pricebox: {
    backgroundColor: "#ffffee",
    marginHorizontal: 5,
    borderRadius: 5,
  },
  priceItem: { flexDirection: "row", padding: 10 },
});

export default Checkout;
