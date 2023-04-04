import { StyleSheet, Text, View } from "react-native";

import AddButton from "../AddButton";

type Props = {
  price: number;
};

const PriceBox = (props: Props) => {
  const { price } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.pricefont}>
        {price}
        {"\u20AC"}
      </Text>
      <View style={{ position: "absolute", top: 50, right: 20, width: 200 }}>
        <AddButton title="Add to Cart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#d9d9d9",
  },
  pricefont: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
});

export default PriceBox;
