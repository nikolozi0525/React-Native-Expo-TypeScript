import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import { useNavigation } from "expo-router";

type Props = {
  title: string;
  article_count?: number | 0;
};

const CategoryCard: React.FC<Props> = (props) => {
  const { article_count, title } = props;
  const navigator: any = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigator.push("categorydetail")}
    >
      <View style={styles.card}>
        <View style={styles.description}>
          <Text style={styles.text_1}>{title}</Text>
          <Text style={styles.text_2}>{article_count} Articles</Text>
        </View>
        <Image
          style={{
            left: 0,
            width: "30%",
            height: Dimensions.get("window").width / 4 - 10,
            borderRadius: 5,
          }}
          source={require("../../assets/images/image2.png")}
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
  },

  description: {
    width: "70%",
  },
  text_1: {
    marginLeft: 5,
    fontSize: 22,
    fontWeight: "bold",
  },
  text_2: {
    position: "absolute",
    bottom: 5,
    marginLeft: 5,
    fontSize: 18,
  },
});
export default CategoryCard;
