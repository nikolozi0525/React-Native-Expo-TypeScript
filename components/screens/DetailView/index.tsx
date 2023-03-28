import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import BackButton from "../../BackButton";
import Badge from "../../Badge";
import Description from "../../Description";
import HeadTitle from "../../HeadTitle";
import ImageView from "../../ImageView";
import OtherOptions from "../../OtherOptions";
import PriceBox from "../../PriceBox";

const DetailView = () => {
  const [offset, setOffset] = useState(0);
  const data = {
    img: "../../assets/images/image1.png",
  };
  return (
    <>
      <View style={{ position: "absolute", top: 20, left: 20, zIndex: 2 }}>
        <BackButton />
      </View>
      <ScrollView
        style={[styles.container]}
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;
          setOffset(scrolling);
        }}
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View
          style={{
            transform: [
              {
                translateY: offset * 0.61,
              },
            ],
          }}
        >
          <ImageView uri={data.img} />
        </View>
        <View
          style={{
            backgroundColor: "#fffff8",
          }}
        >
          <View
            style={{ position: "relative", top: 10, left: 10, marginBottom: 5 }}
          >
            <Badge>
              <Text>vegetarian </Text>
            </Badge>
          </View>
          <HeadTitle>
            <Text> Funky Falafel Bowl</Text>
          </HeadTitle>
          <PriceBox price={9} />
          <Description>
            <Text>
              Buglur Salad (
              <Text style={styles.bolded}>
                Wheat, Cereals containing gluten
              </Text>
              ), Hummus (<Text style={styles.bolded}>Sesame seeds</Text>),
              Tomatoes, Cucumber, Beetroot falafel, Shepherd's cheese (
              <Text style={styles.bolded}>Milk, Lactose</Text>),Lime,Olive Oil,
              Parsley
              <View>
                <Text style={{ fontSize: 24 }}>
                  My contain traces:Rye, barley, eggs, celery,soybeans, oats,
                  mustard
                </Text>
              </View>
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
  bolded: {
    fontWeight: "bold",
  },
});

export default DetailView;
