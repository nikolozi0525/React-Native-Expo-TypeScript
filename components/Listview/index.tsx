import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Dispatch } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HeadTitle from "../HeadTitle";
import React from "react";
import { TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "f3j2q30r",
    key: 1,
    title: "Open orders",
    description: "View and check orders in progress",
  },
  {
    id: "39nv34509",
    key: 2,
    title: "Closed orders",
    description: "View you previous orders",
  },
  {
    id: "22n04f390",
    key: 3,
    title: "Support",
    description: "Reach our for all open questions0",
  },
  {
    key: 4,
    id: "dsf0s9dfs09",
    title: "Terms & Conditions",
    description: "Terms & Conditions",
  },
  {
    key: 5,
    id: "0sdfu40s9e",
    title: "Privacy Policy",
    description: "Privacy Policy",
  },
  {
    key: 6,
    id: "2l3jr43osdf",
    title: "Delete User",
    description: "Request for deletion of the user account and associated data",
  },
];

type ItemProps = { title: string; description: string };

const Item = ({ title, description }: ItemProps) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View
      style={{
        position: "absolute",
        right: 30,
        marginTop: 20,
      }}
    >
      <FontAwesome name="chevron-right" size={15} />
    </View>
  </View>
);

type Props = {
  value: number;
  onItemClick: Dispatch<any>;
};

const ListView = (props: Props) => {
  const { value, onItemClick } = props;
  return (
    <SafeAreaView>
      <HeadTitle>{"Quick Access"}</HeadTitle>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onItemClick(item.key)}>
              <Item title={item.title} description={item.description} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderRadius: 5,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    borderColor: "#d9d9d9",
    borderWidth: 1,
    marginBottom: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "grey",
  },
});

export default ListView;
