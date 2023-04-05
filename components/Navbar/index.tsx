import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "expo-router";

type Props = {
  address: string;
};

const Navbar = (props: Props) => {
  const { address } = props;

  const navigator: any = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigator.push("setaddress")}>
      <View style={styles.container}>
        <View>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={styles.bolded}>38 min </Text>
            <FontAwesome
              name="circle"
              size={6}
              style={{
                justifyContent: "center",
                alignSelf: "center",
              }}
            />
            <Text style={styles.bolded}> Home, </Text>

            <Text style={styles.myfont}>{address}</Text>
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
        <View style={styles.arrow}>
          <FontAwesome name="chevron-right" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: "#fffffe",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  bolded: {
    fontSize: 20,
    fontWeight: "bold",
  },
  myfont: {
    fontSize: 20,
  },
  time: {
    fontSize: 16,
    color: "grey",
  },
  arrow: {
    marginLeft: 10,
  },
});

export default Navbar;
