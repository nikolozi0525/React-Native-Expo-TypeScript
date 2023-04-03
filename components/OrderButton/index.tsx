import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  count: number;
  price?: number;
  title: string;
  onClick(): void;
};

const OrderButton = (props: Props) => {
  const { count, price, title, onClick } = props;

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.counts}>
          <Text>{count}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>
        {(price && (
          <Text style={styles.totalPrice}>
            {price}
            {"\u20AC"}
          </Text>
        )) ||
          null}
        <View style={styles.arrow}>
          <FontAwesome name="chevron-right" style={styles.icon} size={20} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: "#444444",
    paddingVertical: 15,
    flexDirection: "row",
    width: "95%",
    zIndex: 1,
    alignSelf: "center",
    marginBottom: 10,
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
    fontSize: 18,
  },
  arrow: {
    marginLeft: "auto",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: "white",
    marginRight: 15,
  },
});

export default OrderButton;
