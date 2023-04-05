import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

type Prop = {
  title: string;
};

const BasketNavbar = (props: Prop) => {
  const { title } = props;
  const navigator = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity
          onPress={() => navigator.goBack()}
          style={{ padding: 10 }}
        >
          <FontAwesome name="arrow-left" size={20} />
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={styles.title}>{title}</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Text style={styles.time}>
            Kitchen's Open 09:00 - 12:30 and 15:00 - 19:00
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffffe",
    flexDirection: "row",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  myfont: {
    fontSize: 20,
  },
  time: {
    fontSize: 16,
    color: "grey",
    textAlign: "center",
    padding: 5,
  },
  back: {
    position: "absolute",
    left: 10,
  },
});

export default BasketNavbar;
