import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";

type Option = {
  index: number;
  title: string;
};

type Props = {
  value: number;
  options: Array<Option>;
  onSelect: Dispatch<number>;
};

const OneSelect = (props: Props) => {
  const { value, options, onSelect } = props;

  const [isSelected, setSelected] = useState(value);

  useEffect(() => {
    onSelect(isSelected);
  }, [isSelected]);
  return (
    <View style={styles.container}>
      {options.map((item) => {
        return (
          <TouchableOpacity
            onPress={() => setSelected(item.index)}
            style={{
              flexDirection: "row",
              flex: 1,
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {isSelected == item.index ? (
              <View style={styles.clicked}>
                <Text style={{ textAlign: "center" }}>{item.title}</Text>
              </View>
            ) : (
              <View style={styles.btn}>
                <Text
                  style={{
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  btn: {
    width: "90%",
    borderRadius: 5,
    height: 40,
    backgroundColor: "#fff8cd",
    alignSelf: "center",
    justifyContent: "center",
  },
  clicked: {
    width: "90%",
    borderRadius: 5,
    height: 40,
    backgroundColor: "#ebeddc",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default OneSelect;
