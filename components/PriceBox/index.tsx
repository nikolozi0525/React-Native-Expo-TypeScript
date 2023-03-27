import { StyleSheet, Text, View } from "react-native";

import AddButton from "../AddButton";

type Props = {
  price: number;
};
interface Position {
  position?: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const PriceBox = (props: Props) => {
  const { price } = props;
  const position: Position = { position: "absolute", top: 50, right: 20 };
  const btposition: Position = { position: "absolute", top: 50, right: 20 };
  return (
    <View style={styles.container}>
      <Text style={styles.pricefont}>
        {price}
        {"\u20AC"}
      </Text>
      <AddButton title="Add to Cart" btposition={position} />
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
