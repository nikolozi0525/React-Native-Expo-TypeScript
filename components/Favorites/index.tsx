import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Food } from "../../types";
import FoodCard from "../FoodCard/index";
import HeadTitle from "../HeadTitle";

const Favorite = () => {
  const data: Array<Food> = [
    {
      id: "1di43s09sl3",
      price: 9.0,
      title: "Funky Falafel Bowl",
      src: "../../assets/images/image1.png",
    },
    {
      id: "dfs83a92sdfe",
      price: 9.0,
      title: "Cheese Spatzie",
      src: "../../assets/images/image2.png",
    },
  ];
  const [foods, setFoods] = useState([...data]);
  const foodList = () => {
    return foods.map((f: Food) => {
      return (
        <FoodCard price={f.price} title={f.title} key={f.id} src={f.src} />
      );
    });
  };
  return (
    <View>
      <View>
        <HeadTitle>
          <Text>Favourites</Text>
        </HeadTitle>
      </View>
      <View style={styles.food}>{foodList()}</View>
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
