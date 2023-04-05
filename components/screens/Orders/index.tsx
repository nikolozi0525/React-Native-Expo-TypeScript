import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import Badge from "../../Badge";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "expo-router";

const orders = [
  {
    id: "3rs0fseafs",
    date: "2023-03-23-9-30",
    closed: true,
    price: 27.0,
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
    ],
  },
  {
    id: "3rs0fslkjfs",
    date: "2023-04-30-9-30",
    closed: false,
    price: 27.0,
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
    ],
  },
];

const Orders = () => {
  const navigator: any = useNavigation();
  const viewOrders = () => {
    return orders.map((o) => {
      return (
        <View key={o.id}>
          <TouchableOpacity
            style={{
              height: 80,
              borderBottomColor: "#ededed",
              borderBottomWidth: 1,
              flexDirection: "row",
              padding: 10,
            }}
            onPress={() => navigator.push("OrderDetail")}
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
                date: <Text style={{ fontStyle: "italic" }}>{o.date}</Text>
              </Text>
              <Text style={{ fontSize: 18 }}>
                Price: {o.price}
                {"\u20AC"}
              </Text>
            </View>
            <View style={{ alignSelf: "flex-end" }}>
              {o.closed && <Badge>Closed</Badge>}
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <>
      <ScrollView style={{ height: "100%", backgroundColor: "#fff9f1" }}>
        {viewOrders()}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Orders;
