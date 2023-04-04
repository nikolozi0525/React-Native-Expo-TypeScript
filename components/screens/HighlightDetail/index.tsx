import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { Food } from "../../../types";
import FoodCard from "../../FoodCard";
import HeadTitle from "../../HeadTitle/index";
import ImageButton from "../../ImageButton";
import OneSelect from "../../OneSelect";
import { SafeAreaView } from "react-native-safe-area-context";

type CategoryData = {
  category: number;
  title: string;
  foods: Array<Food>;
};

const data: Array<CategoryData> = [
  {
    category: 1,
    title: "Fries",
    foods: [
      {
        id: "1di43s09sl3",
        price: 9.0,
        title: "Funky Falafel Bowl",
        src: "../../assets/images/image1.png",
      },
      {
        id: "dfs83a92sdfe",
        price: 9.0,
        title: "Cheese Spatzie",
        src: "../../assets/images/image2.png",
      },
      {
        id: "dfs83a92sdfe",
        price: 9.0,
        title: "Cheese Spatzie",
        src: "../../assets/images/image2.png",
      },
    ],
  },
  {
    category: 2,
    title: "Pasta",
    foods: [
      {
        id: "1di43s09sl3",
        price: 9.0,
        title: "Funky Falafel Bowl",
        src: "../../assets/images/image1.png",
      },
      {
        id: "dfs83a92sdfe",
        price: 9.0,
        title: "Cheese Spatzie",
        src: "../../assets/images/image2.png",
      },
    ],
  },
  {
    category: 3,
    title: "Gnocchi",
    foods: [
      {
        id: "1di43s09sl3",
        price: 9.0,
        title: "Funky Falafel Bowl",
        src: "../../assets/images/image1.png",
      },
      {
        id: "dfs83a92sdfe",
        price: 9.0,
        title: "Cheese Spatzie",
        src: "../../assets/images/image2.png",
      },
    ],
  },
];

const HighlightDetail = () => {
  const [sub, setSub] = useState(1);
  const [dataSourceCords, setDataSourceCords] = useState([] as number[]);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [ref, setRef] = useState<ScrollView>();

  const options = data.map((d) => {
    return { index: d.category, title: d.title };
  });

  const dataView = () => {
    return data.map((d) => {
      return (
        <View
          key={d.category}
          onLayout={(event) => {
            const layout = event.nativeEvent.layout;
            dataSourceCords[d.category] = layout.y;
          }}
        >
          <HeadTitle>{d.title} </HeadTitle>
          <View style={styles.container}>
            {d.foods.map((f) => {
              return (
                <FoodCard
                  price={f.price}
                  title={f.title}
                  src={f.src}
                  key={f.id}
                />
              );
            })}
          </View>
        </View>
      );
    });
  };

  useEffect(() => {
    if (dataSourceCords.length > scrollToIndex) {
      {
        ref?.scrollTo({
          x: 0,
          y: dataSourceCords[sub],
          animated: true,
        });
      }
    }
  }, [sub]);

  return (
    <SafeAreaView style={{ backgroundColor: "#fffffe", height: "100%" }}>
      <View style={{ marginBottom: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <OneSelect
            onSelect={setSub}
            options={options}
            value={sub}
            width={{ width: 100 }}
          />
        </ScrollView>
      </View>
      <ScrollView
        ref={(ref) => {
          setRef(ref as any);
        }}
        showsVerticalScrollIndicator={false}
      >
        <View>{dataView()}</View>
        <ImageButton />
        <View style={{ alignContent: "center", alignSelf: "center" }}>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 16,
            }}
          >
            Want something else?
          </Text>
          <Text>Click to view Categories again</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default HighlightDetail;
