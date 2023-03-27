import { StyleSheet, Text, View } from "react-native";

type Props = {
  children: any;
};

const Description = (props: Props) => {
  const { children } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"Description"}</Text>
      <Text style={{ fontSize: 24 }}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Description;
