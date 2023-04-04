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

const RadioButton = (props: Props) => {
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
            style={{ flexDirection: "row", marginHorizontal: 50 }}
          >
            {isSelected == item.index ? (
              <FontAwesome name="check-circle" size={18} />
            ) : (
              <FontAwesome name="circle-o" size={18} />
            )}

            <Text style={{ marginLeft: 10 }}>{item.title}</Text>
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
});

export default RadioButton;
