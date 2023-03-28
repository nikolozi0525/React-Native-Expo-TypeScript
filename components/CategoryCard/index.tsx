import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

type Props = {
  title: string;
  article_count?: number | 0;
};

const CategoryCard: React.FC<Props> = (props) => {
  const { article_count, title } = props;
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <View style={styles.description}>
          <Text style={styles.text_1}>{title}</Text>
          <Text style={styles.text_2}>{article_count} Articles</Text>
        </View>
        <Image
          style={styles.thumbs}
          source={{ uri: "../../assets/images/image2.png" }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "50%",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    marginBottom: 30,
  },
  card: {
    backgroundColor: "#fffff8",
    flexDirection: "row",
    height: 150,
  },
  thumbs: {
    width: "30%",
    height: 150,
    borderRadius: 5,
  },
  description: {
    width: "70%",
  },
  text_1: {
    marginLeft: 10,
    fontSize: 42,
    fontWeight: "bold",
  },
  text_2: {
    position: "absolute",
    bottom: 10,
    marginLeft: 10,
    fontSize: 24,
  },
});
export default CategoryCard;
