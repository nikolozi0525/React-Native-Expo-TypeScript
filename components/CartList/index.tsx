import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";

import { FlatList } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const data = [
  {
    id: "34ttet4",
    title: "Funky Falafel Bowl",
    price: 9.0,
    count: 2,
  },
  {
    id: "4t0sg9",
    title: "Cheese Spatizie",
    price: 6.0,
    count: 0,
  },
  {
    id: "gd90e4",
    title: "Klassiche Kasespatzle",
    price: 9.0,
    count: 2,
  },
];
type ItemProps = { title: string; price: number; count: number };
const Item = ({ title, price, count }: ItemProps) => {
  const [tcount, setCount] = useState(count);
  const increase = () => {
    setCount(tcount + 1);
  };
  const decrease = () => {
    setCount(tcount - 1);
  };
  useEffect(() => {}, [tcount]);
  return (
    (tcount > 0 && (
      <View style={styles.item}>
        <Image
          source={require("../../assets/images/image1.png")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.price}>
            {price}
            {"\u20AC"}
          </Text>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.lbutton} onPress={decrease}>
            <View>
              <FontAwesome name="minus" size={15} />
            </View>
          </TouchableOpacity>
          <View style={styles.middle}>
            <Text style={styles.count}>{tcount}</Text>
          </View>
          <TouchableOpacity style={styles.rbutton} onPress={increase}>
            <View>
              <FontAwesome name="plus" size={15} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )) ||
    null
  );
};

const CartList = () => {
  return (
    <SafeAreaView>
      {data.map((item) => {
        return (
          (item.count > 0 && (
            <TouchableOpacity key={item.id}>
              <Item
                title={item.title}
                price={item.price}
                count={item.count}
              ></Item>
            </TouchableOpacity>
          )) ||
          null
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 60,
    width: 60,
    borderRadius: 5,
    // marginLeft: 20,
  },
  item: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#fffffe",
  },
  content: { marginLeft: 30 },
  title: {
    color: "grey",
    fontSize: 15,
  },
  price: {
    fontWeight: "bold",
    fontSize: 19,
  },
  count: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttons: {
    marginLeft: "auto",
    borderRadius: 5,
    borderColor: "#b3b3b3",
    borderWidth: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#fffffe",
    padding: 5,
  },
  lbutton: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  rbutton: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  middle: {
    marginHorizontal: 10,
  },
});

export default CartList;
