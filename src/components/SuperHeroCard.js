import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SuperHeroCard(props) {
  const { superhero } = props;
  const navigation = useNavigation();

  const goToSuperHero = () => {
    navigation.navigate("SuperHero", { id: superhero.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToSuperHero}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.number}>
              {/* #{`${superhero.order}`.padStart(3, 0)} */}
            </Text>
            <Text style={styles.name}>{superhero.name}</Text>
            <Image source={{ uri: superhero.image }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor:"#FA6C6C",
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 15,
    right: 10,
    width: 90,
    height: 90,
  },
});
