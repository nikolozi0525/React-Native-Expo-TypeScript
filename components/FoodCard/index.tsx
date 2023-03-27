import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import AddButton from "../AddButton";
import Badge from "../Badge";
import PlusButton from "../PlusButton";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  price: string;
  title: string;
};

interface Display {
  display: string;
}

interface Position {
  position?: string;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const FoodCard: React.FC<Props> = (props) => {
  const { price, title } = props;
  const navigation = useNavigation();
  const position: Position = { position: "absolute", top: 130, right: 30 };
  const btposition: Position = { position: "absolute", bottom: 100, right: 30 };
  const badge_pos: Position = { position: "absolute", top: 12, left: 10 };
  const [count, setCount] = useState(0);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.push("detail")}
    >
      <View>
        <Image
          style={styles.thumbs}
          source={{ uri: "assets/images/image1.png" }}
        />
        <Badge badge_pos={badge_pos}>{"top-selling"}</Badge>

        <AddButton btposition={btposition} title="+" />
        <View style={styles.description}>
          <Text style={styles.text_1}>
            <b>
              {price}
              {"\u20AC"}
            </b>
          </Text>
          <Text style={styles.text_2}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
