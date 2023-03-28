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
  const [contentInsetBottom, setContentInsetBottom] = useState(0);
  return (
    <>
      <View style={{ position: "absolute", top: 20, left: 20, zIndex: 2 }}>
        <BackButton />
      </View>
      <ScrollView
        style={[styles.container]}
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          const { height } = event.nativeEvent.layoutMeasurement;
          console.log(height);
          setContentInsetBottom(height - 600);
          setOffset(scrolling);
        }}
        automaticallyAdjustContentInsets={false}
        contentInset={{ top: 0, bottom: contentInsetBottom }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View
          style={{
            // flexWrap: "wrap",
            transform: [
              {
                translateY: offset * 0.61,
              },
            ],
          }}
        >
          <ImageView />
        </View>
        <View
          style={{
            backgroundColor: "#fffff8",
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
              <br></br>My contain traces:Rye, barley, eggs, celery,soybeans,
              oats, mustard
            </Text>
          </Description>
          <OtherOptions />
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "baseline",
    flexShrink: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default DetailView;