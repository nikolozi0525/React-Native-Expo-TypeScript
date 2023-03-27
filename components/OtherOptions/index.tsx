import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import FoodCard from "../FoodCard/index";
import HeadTitle from "../HeadTitle";

const OtherOptions = () => {
  const data = [
    {
      id: "1di43s09sl3",
      price: "6",
      title: "Pasta",
    },
    {
      id: "dfs83a92sdfe",
      price: "15",
      title: "Pasta",
    },
    {
      id: "sfe320s3js5",
      price: "14",
      title: "Pasta",
    },
    {
      id: "y0gr57dlugs",
      price: "9",
      title: "Pasta",
    },
  ];
  const [foods, setFoods] = useState([...data]);
  const foodList = foods.map((f) => {
    <FoodCard price={f.price} title={f.title} key={f.id} />;
  });
  return (
    <View>
      <View>
        <HeadTitle>Explore other Options</HeadTitle>
      </View>
      <View style={styles.food}>
        <FoodCard price={"9"} title={"Pasta"} />
        <FoodCard price={"9"} title={"Pasta"} />
        <FoodCard price={"9"} title={"Pasta"} />
        <FoodCard price={"9"} title={"Pasta"} />
        <FoodCard price={"9"} title={"Pasta"} />
        <FoodCard price={"9"} title={"Pasta"} />
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
  text: {
    marginLeft: 20,
    fontSize: 56,
    fontFamily: "Serif",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default OtherOptions;
