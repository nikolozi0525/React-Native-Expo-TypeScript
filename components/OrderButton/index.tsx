import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  count: number;
  price: number;
  title: string;
  onClick(): void;
};

const OrderButton = (props: Props) => {
  const { count, price, title, onClick } = props;

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.counts}>{count}</View>

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.totalPrice}>
          {price}
          {"\u20AC"}
        </Text>
        <View style={styles.arrow}>
          <FontAwesome name="chevron-right" style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: "black",
    paddingVertical: 10,
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
  },
  counts: {
    backgroundColor: "white",
    padding: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 25,
  },
  totalPrice: {
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: "auto",
  },
  arrow: {
    marginLeft: 20,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
  },
});

export default OrderButton;
