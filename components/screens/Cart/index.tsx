import { ScrollView, Text, View } from "react-native";

import CartList from "../../CartList/index";

const Cart = () => {
  return (
    <View style={{ backgroundColor: "#fffffe", height: "100%" }}>
      <CartList />
    </View>
  );
};

export default Cart;
