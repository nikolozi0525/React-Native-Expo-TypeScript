import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.container}>
          <FontAwesome name="arrow-left" size={18} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -1,
      height: 1,
    },
    alignSelf: "flex-end",
    backgroundColor: "white",
  },
});

export default BackButton;
