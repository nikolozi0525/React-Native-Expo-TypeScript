import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import FoodCard from "../FoodCard/index";
import HeadTitle from "../HeadTitle";

const Favorite = () => {
  const data = [
    {
      id: "1di43s09sl3",
      price: "9.00",
      title: "Funky Falafel Bowl",
    },
    {
      id: "dfs83a92sdfe",
      price: "6.00",
      title: "Cheese Spatzie",
    },
  ];
  const [foods, setFoods] = useState([...data]);
  const foodList = () => {
    return foods.map((f: any) => {
      return <FoodCard price={f.price} title={f.title} key={f.id} />;
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
