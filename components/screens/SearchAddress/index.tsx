import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  id: string;
  street: string;
  city: string;
};

const addresses: Array<Props> = [
  {
    id: "4l9sbcv0cx",
    street: "Basselweg 73",
    city: "Hamburg",
  },
];

const Address = (props: Props) => {
  const { id, street, city } = props;

  return (
    <View
      style={{
        borderBottomColor: "#dddddd",
        padding: 10,
        borderBottomWidth: 1,
        backgroundColor: "transparent",
      }}
      key={id}
    >
      <TouchableOpacity style={{ flexDirection: "row" }}>
        <FontAwesome name="map-marker" size={28} style={styles.icon} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{street}</Text>
          <Text>{city}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const SearchAddress = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          borderBottomColor: "#dddddd",
          padding: 10,
          borderBottomWidth: 1,
          backgroundColor: "#fdfdef",
        }}
      >
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <FontAwesome name="map-marker" size={28} style={styles.icon} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {"Use my current location"}
            </Text>
            <Text>{"We need your permission for that."}</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Search Results here */}
      {addresses.map((a) => {
        return <Address street={a.street} city={a.city} id={a.id} />;
      })}

      <View
        style={{
          borderBottomColor: "#dddddd",
          padding: 10,
          borderBottomWidth: 1,
          backgroundColor: "transparent",
        }}
      >
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <FontAwesome name="crosshairs" size={28} style={styles.icon} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              {"Can't find your Address?"}
            </Text>
            <Text>{"Contact Support to get help fast"}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fffffe",
  },
  icon: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default SearchAddress;
