import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Type(props) {
  const { biography } = props;
  console.log("lslslslsls")
  console.log(biography)
  return (
    <View style={styles.content}>

      <Text style={styles.title}>Biography</Text>
        <View
          key={0}
          style={styles.pill}
        >
          <Text>{biography.publisher}</Text>
        </View>
        <View
          key={1}
          style={styles.pill}
        >
          <Text>{biography.alignment}</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: "#48CFB2"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
});
