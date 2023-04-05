import { Dispatch, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  selected: boolean;
  onChange: Dispatch<boolean>;
  children: any;
};

const Radio = (props: Props) => {
  const { selected, onChange, children } = props;
  const [select, setSelect] = useState(selected);

  useEffect(() => {
    onChange(select);
  }, [select]);

  return (
    <View style={{ paddingRight: 30 }}>
      <TouchableOpacity
        onPress={() => setSelect(!select)}
        style={{ flexDirection: "row" }}
      >
        {select == true ? (
          <FontAwesome name="dot-circle-o" size={20} style={styles.icon} />
        ) : (
          <FontAwesome name="circle-o" size={20} style={styles.icon} />
        )}
        <View style={styles.desc}>{children}</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
  },
  desc: {
    width: "100%",
    marginLeft: 30,
    flexDirection: "column",
  },
});

export default Radio;
