import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";

import CartList from "../../CartList/index";
import OrderButton from "../../OrderButton/index";

const Cart = () => {
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "#fffffe",
        }}
      >
        <CartList />
      </ScrollView>
      <OrderButton
        count={2}
        price={18.0}
        title="PREORDER"
        onClick={() => {
          alert("preorder");
        }}
      />
    </>
  );
};

export default Cart;
