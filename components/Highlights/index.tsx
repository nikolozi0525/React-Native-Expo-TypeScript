import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CategoryCard from "../CategoryCard";
import HeadTitle from "../HeadTitle";
import { Highlight } from "../../types";
import { useNavigation } from "expo-router";

type Props = {
  title: string;
};

const Highlights = (props: Props) => {
  const { title } = props;
  const data: Array<Highlight> = [
    {
      id: "1di43s09sl3",
      article_count: 6,
      title: "Pasta & Gnocchi",
      src: "../../assets/images/image1.png",
    },
    {
      id: "dfs83a92sdfe",
      article_count: 15,
      title: "Bowls & Salads",

      src: "../../assets/images/image1.png",
    },
  ];
  const [highlights, setHighlights] = useState([...data]);

  const navigator: any = useNavigation();
  const onClick = () => {
    navigator.push("highlightdetail");
  };

  const HighlightsList = () => {
    return highlights.map((h: any) => {
      return (
        <CategoryCard
          article_count={h.article_count}
          title={h.title}
          key={h.id}
          onClick={onClick}
        />
      );
    });
  };
  return (
    <View>
      <View>
        <HeadTitle>{title}</HeadTitle>
      </View>
      <View style={styles.food}>{HighlightsList()}</View>
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
