import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";

import CartList from "../../CartList/index";
import OrderButton from "../../OrderButton/index";
import { useNavigation } from "expo-router";

const Cart = () => {
  const navigation: any = useNavigation();
  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "#fffffe",
        }}
      >
        <CartList />
      </ScrollView>
      <View style={{ position: "absolute", bottom: 20, width: "100%" }}>
        <OrderButton
          count={2}
          price={18.0}
          title="PREORDER"
          onClick={() => {
            navigation.push("checkout");
          }}
        />
      </View>
    </>
  );
};

export default Cart;
