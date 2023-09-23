import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import { Food } from "../../../types";
import FoodCard from "../../FoodCard";
import ImageButton from "../../ImageButton/index";
import { useState } from "react";

const CategoryDetail = () => {
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
    {
      id: "eg543s09sl3",
      price: 9.0,
      title: "Funky Falafel Bowl",
      src: "../../assets/images/image3.png",
    },
    {
      id: "htd3a92sdfe",
      price: 9.0,
      title: "Cheese Spatzie",
      src: "../../assets/images/image1.png",
    },
    {
      id: "5y73s09sl3",
      price: 9.0,
      title: "Funky Falafel Bowl",
      src: "../../assets/images/image2.png",
    },
    {
      id: "io8ga92sdfe",
      price: 9.0,
      title: "Cheese Spatzie",
      src: "../../assets/images/image3.png",
    },
  ];
  const [foods, setFoods] = useState([...data]);

  const setfoods = () => {
    return foods.map((f) => {
      return (
        <FoodCard price={f.price} title={f.title} key={f.id} src={f.src} />
      );
    });
  };
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#fffffe" }}>
      <ScrollView>
        <View style={styles.container}>{setfoods()}</View>
        <ImageButton src={require("../../../assets/images/image6.png")} />
        <View style={{ alignContent: "center", alignSelf: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Want something else?
          </Text>
          <Text>Click to view Categories again</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default CategoryDetail;
