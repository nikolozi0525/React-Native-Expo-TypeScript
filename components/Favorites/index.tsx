import { StyleSheet, Text, View } from "react-native";

import FoodCard from "../FoodCard/index";
import HeadTitle from "../HeadTitle";
import React from "react";

const Favorite = () => {
  return (
    <View>
      <View>
        <HeadTitle>
          <Text>Favourites</Text>
        </HeadTitle>
      </View>
      <View style={styles.food}>
        <FoodCard price={"9"} title="Funky Falafel Bowl"></FoodCard>
        <FoodCard price={"6"} title="Cheese Spatzie"></FoodCard>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  food: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Favorite;
