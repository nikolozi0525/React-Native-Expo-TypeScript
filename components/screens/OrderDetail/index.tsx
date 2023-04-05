import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import Badge from "../../Badge";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

const order = {
  id: "3rs0fseafs",
  date: "2023-03-23-9-30",
  closed: false,
  price: 81.0,
  foods: [
    {
      id: "1di43s09sl3",
      price: 9.0,
      title: "Funky Falafel Bowl",
      src: "../../assets/images/image1.png",
      count: 1,
    },
    {
      id: "dfs83a92sdfe",
      price: 9.0,
      title: "Cheese Spatzie",
      src: "../../assets/images/image2.png",
      count: 2,
    },
    {
      id: "1di43s09sl3",
      price: 9.0,
      title: "Funky Falafel Bowl",
      src: "../../assets/images/image1.png",
      count: 1,
    },
    {
      id: "dfs83a92sdfe",
      price: 9.0,
      title: "Cheese Spatzie",
      src: "../../assets/images/image2.png",
      count: 2,
    },
    {
      id: "1di43s09sl3",
      price: 9.0,
      title: "Funky Falafel Bowl",
      src: "../../assets/images/image1.png",
      count: 1,
    },
    {
      id: "dfs83a92sdfe",
      price: 9.0,
      title: "Cheese Spatzie",
      src: "../../assets/images/image2.png",
      count: 2,
    },
  ],
};

const OrderDetail = () => {
  const [edit, setEdit] = useState(false);

  const foodsView = () => {
    return order.foods.map((f) => {
      const [count, setCount] = useState(f.count);
      const increase = () => {
        setCount(count + 1);
      };
      const decrease = () => {
        setCount(count - 1);
      };
      return (
        (count > 0 && (
          <View
            style={{
              padding: 20,
              flexDirection: "row",
              borderTopColor: "#dddddd",
              borderTopWidth: 1,
            }}
            key={f.id}
          >
            <Image
              source={{ uri: f.src }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <View style={{ alignSelf: "center", marginLeft: 20 }}>
              <Text style={styles.myfont}>{f.title}</Text>
              <Text style={styles.myfont}>
                {"Price: "}
                {f.price}
                {"\u20AC"}
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.myfont}>{"Count"}</Text>
                {edit == true ? (
                  <View style={styles.buttons}>
                    <TouchableOpacity style={styles.lbutton} onPress={decrease}>
                      <FontAwesome
                        name="minus"
                        size={15}
                        style={{ verticalAlign: "middle" }}
                      />
                    </TouchableOpacity>
                    <View style={styles.middle}>
                      <Text style={styles.count}>{count}</Text>
                    </View>
                    <TouchableOpacity style={styles.rbutton} onPress={increase}>
                      <View>
                        <FontAwesome name="plus" size={15} />
                      </View>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <Text style={styles.myfont}>{count}</Text>
                )}
              </View>
            </View>
          </View>
        )) ||
        null
      );
    });
  };

  return (
    <>
      <View
        style={{
          backgroundColor: "#fff9f1",
          flexDirection: "row",
          padding: 10,
        }}
      >
        <Image
          source={require("../../../assets/images/ninja-logo.png")}
          style={{
            width: 60,
            height: 60,
            alignSelf: "center",
          }}
        />
        <View style={{ marginLeft: 10, alignSelf: "center" }}>
          <Text style={{ fontSize: 18 }}>
            Date: <Text style={{ fontStyle: "italic" }}>{order.date}</Text>
          </Text>
          <Text style={{ fontSize: 18 }}>
            Price: {order.price}
            {"\u20AC"}
          </Text>
        </View>
        <View style={{ alignSelf: "flex-end" }}>
          {order.closed && <Badge>Closed</Badge>}
        </View>
      </View>
      <ScrollView style={{ height: "100%", backgroundColor: "#fff9f1" }}>
        {foodsView()}
      </ScrollView>
      {order.closed == false && (
        <View
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <TouchableOpacity onPress={() => setEdit(!edit)}>
            <FontAwesome
              name="pencil"
              size={20}
              style={{
                color: "white",
                alignSelf: "center",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
                padding: 15,
                backgroundColor: "#333333",
                borderRadius: 15,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  myfont: {
    fontSize: 18,
    padding: 5,
  },
  buttons: {
    marginLeft: "auto",
    borderRadius: 5,
    borderColor: "#b3b3b3",
    borderWidth: 1,
    flexDirection: "row",
    // alignSelf: "center",
    // justifyContent: "center",
    backgroundColor: "#fffffe",
  },
  lbutton: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: "center",
    alignSelf: "center",
    verticalAlign: "middle",
    paddingTop: 10,
    marginHorizontal: 10,
  },
  rbutton: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    paddingTop: 10,
  },
  middle: {
    marginHorizontal: 10,
    paddingTop: 5,
  },
  count: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default OrderDetail;
