import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import BackButton from "../../BackButton";
import Badge from "../../Badge";
import Description from "../../Description";
import HeadTitle from "../../HeadTitle";
import ImageView from "../../ImageView";
import OtherOptions from "../../OtherOptions";
import PriceBox from "../../PriceBox";

interface Position {
  position?: string | "relative";
  top?: number | 0;
  left?: number | 0;
  right?: number | 0;
  bottom?: number | 0;
}
const DetailView = () => {
  const badge_pos: Position = { position: "relative", top: 10, left: 10 };
  const [offset, setOffset] = useState(0);
  return (
    <ScrollView
      style={[
        styles.container,
        {
          height: -offset * 2,
        },
      ]}
      onScroll={(event) => {
        const scrolling = event.nativeEvent.contentOffset.y;
        setOffset(scrolling);
      }}
      scrollEventThrottle={16}
    >
      <View style={{ position: "absolute", top: 20, left: 20, zIndex: 2 }}>
        <BackButton />
      </View>
      <View>
        <ImageView />
      </View>
      <View
        style={{
          flexWrap: "wrap",
          backgroundColor: "#fffff8",
          transform: [
            {
              translateY: -offset * 2,
            },
          ],
        }}
      >
        <Badge badge_pos={badge_pos}>
          <Text>vegetarian </Text>
        </Badge>
        <HeadTitle>
          <Text> Funky Falafel Bowl</Text>
        </HeadTitle>
        <PriceBox price={9} />
        <Description>
          <Text>
            Buglur Salad (<b>Wheat, Cereals containing gluten</b>), Hummus (
            <b>Sesame seeds</b>), Tomatoes, Cucumber, Beetroot falafel,
            Shepherd's cheese (<b>Milk, Lactose</b>),Lime,Olive Oil, Parsley{" "}
            <br></br>
            <br></br>My contain traces:Rye, barley, eggs, celery,soybeans, oats,
            mustard
          </Text>
        </Description>
        <OtherOptions />
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

export default DetailView;
