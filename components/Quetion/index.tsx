import { StyleSheet, Text, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

const Question = (props: Props) => {
  const { question, answer } = props;
  const [collapsed, setCollapse] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCollapse(!collapsed)}>
        <View
          style={{ height: 80, flexDirection: "row", justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: 18,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            {question}
          </Text>
          {collapsed ? (
            <FontAwesome
              name="plus"
              style={{
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: "auto",
              }}
              size={20}
            />
          ) : (
            <FontAwesome
              name="minus"
              style={{
                justifyContent: "center",
                alignSelf: "center",
                marginLeft: "auto",
              }}
              size={20}
            />
          )}
        </View>
      </TouchableOpacity>
      {collapsed ? (
        <Text></Text>
      ) : (
        <Text style={{ fontSize: 16, marginBottom: 15 }}>{answer}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
  },
});

export default Question;
