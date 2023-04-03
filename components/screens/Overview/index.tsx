import { ScrollView, StyleSheet, View } from "react-native";

import Categories from "../../Categories";
import Favorite from "../../Favorites";
import FoodCard from "../../FoodCard/index";
import Highlights from "../../Highlights";
import ImageButton from "../../ImageButton";
import ImageView from "../../ImageView";
import ListView from "../../Listview";
import OrderButton from "../../OrderButton";
import React from "react";
import { useNavigation } from "expo-router";

const Overview = () => {
  const navigation: any = useNavigation();

  const onClick = () => {
    navigation.push("Basket");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Favorite />
          <Highlights title="Highlights" />
          <Categories title="Categories" />
          <ImageButton />
          <ListView />
        </View>
      </ScrollView>
      <View style={{ position: "absolute", bottom: 10, width: "100%" }}>
        <OrderButton
          title={"VIEW ORDER"}
          price={9.0}
          count={1}
          onClick={onClick}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffffe",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Overview;
