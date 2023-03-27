import { StyleSheet, Text, View } from "react-native";

import CategoryCard from "../CategoryCard";
import HeadTitle from "../HeadTitle";
import React from "react";

type Props = {
  title: string;
};

const Highlights = (props: Props) => {
  const { title } = props;

  return (
    <View>
      <View>
        <HeadTitle>{title}</HeadTitle>
      </View>
      <View style={styles.food}>
        <CategoryCard title="Pasta" article_count={10}></CategoryCard>
        <CategoryCard title="Pasta" article_count={12}></CategoryCard>
        <CategoryCard title="Pasta" article_count={10}></CategoryCard>
        <CategoryCard title="Pasta" article_count={12}></CategoryCard>
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

export default Highlights;
