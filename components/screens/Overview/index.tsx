import { ScrollView, StyleSheet, View } from "react-native";

import Categories from "../../Categories";
import Favorite from "../../Favorites";
import FoodCard from "../../FoodCard/index";
import Highlights from "../../Highlights";
import ImageButton from "../../ImageButton";
import ImageView from "../../ImageView";
import ListView from "../../Listview";
import React from "react";

const Overview = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Favorite />
        <Highlights title="Highlights" />
        <Categories title="Categories" />
        <ImageButton />
        <ListView />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Overview;
