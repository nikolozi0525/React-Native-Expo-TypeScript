import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  address: string;
};

const Navbar = (props: Props) => {
  const { address } = props;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <View>
            <Text>
              <Text style={styles.bolded}>
                38 min
                <FontAwesome
                  name="circle"
                  size={8}
                  style={{ justifyContent: "center" }}
                />{" "}
                Home,{" "}
              </Text>

              <Text style={styles.myfont}>{address}</Text>
            </Text>
          </View>
          <View>
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
    paddingVertical: 5,
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
