import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import AddButton from "../AddButton";
import Badge from "../Badge";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  price: string;
  title: string;
};

interface Display {
  display: string;
}

const FoodCard: React.FC<Props> = (props) => {
  const { price, title } = props;
  const navigation: any = useNavigation();
  const [count, setCount] = useState(0);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.push("detail")}
    >
      <View>
        <Image
          style={[
            styles.thumbs,
            { height: Dimensions.get("window").width / 2 - 20 },
          ]}
          source={require("../../assets/images/image1.png")}
        />
        <View style={{ position: "absolute", top: 12, left: 10 }}>
          <Badge>
            <Text>{"top-selling"}</Text>
          </Badge>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 100,
            right: "5%",
            width: "90%",
          }}
        >
          <AddButton title="+" />
        </View>
        <View style={styles.description}>
          <Text style={styles.text_1}>
            <Text>
              {price}
              {"\u20AC"}
            </Text>
          </Text>
          <Text style={styles.text_2}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCard;
