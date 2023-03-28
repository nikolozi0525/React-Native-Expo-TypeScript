import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CategoryCard from "../CategoryCard";
import HeadTitle from "../HeadTitle";

type Props = {
  title: string;
};

const Categories = (props: Props) => {
  const { title } = props;
  const data = [
    {
      id: "1di43s09sl3",
      article_count: 6,
      title: "Fries",
    },
    {
      id: "dfs83a92sdfe",
      article_count: 15,
      title: "Curries",
    },
    {
      id: "sfe320s3js5",
      article_count: 14,
      title: "Pizza",
    },
    {
      id: "y0gr57dlugs",
      article_count: 16,
      title: "Snacks & Sides",
    },
  ];
  const [categories, setCategories] = useState([...data]);
  const CategoryList = () => {
    return categories.map((f: any) => {
      return (
        <CategoryCard
          article_count={f.article_count}
          title={f.title}
          key={f.id}
        />
      );
    });
  };
  return (
    <View>
      <View>
        <HeadTitle>{title}</HeadTitle>
      </View>
      <View style={styles.food}>{CategoryList()}</View>
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

export default Categories;
