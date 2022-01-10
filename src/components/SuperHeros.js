import React from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import SuperHeroCard from "./SuperHeroCard";

export default function SuperHero(props) {
  const { superheros } = props;

  return (
    <FlatList
      data={superheros}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(superheros) => String(superheros.id)}
      renderItem={({ item }) => <SuperHeroCard superhero={item} />}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 10 : 0,
  },
});
