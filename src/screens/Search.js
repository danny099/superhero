import React, { useState, useCallback } from "react";
import { ScrollView } from "react-native";
import { getSuperHeroSearchApi } from "../api/superhero";
import { getSuperHeroDetailsApi } from "../api/superhero";
import { useNavigation } from '@react-navigation/core'

import SuperHeros from "../components/SuperHeros";
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Button } from "react-native";

export default function Search() {
  const [superheros, setSuperHeros] = useState([]);
  const [search, setSearch] = useState("");

  const navigation = useNavigation()

  const searchFunction = async (text) => {

    try {
      const response = await getSuperHeroSearchApi(text);
      const superherosArray = [];

      for await (const item of response.results) {
        const superheroDetails = await getSuperHeroDetailsApi(item.id);
        console.log({superheroDetails})
        superherosArray.push({
          id: superheroDetails.id,
          name: superheroDetails.name,
          image: superheroDetails.image.url
        });
      }

      setSuperHeros(superherosArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.containerSearch}>
        <TextInput
          placeholder="Search Here..."
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={() => searchFunction(search)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
{/*       <View style={styles.containerSearch}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SuperHerosList")}
          style={styles.buttonShow}
        >
          <Text style={styles.buttonText}>Show all</Text>
        </TouchableOpacity>
      </View> */}
      <View >
        <SuperHeros superheros={superheros} />
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 5,
  },
  containerSearch: {
    marginTop: 10,
    marginLeft: 7,
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: "row",
    height: 50,
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: '70%',

  },
  button: {
    backgroundColor: '#0782F9',
    marginLeft: 10,
    width: '25%',
    height: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonShow: {
    backgroundColor: '#0782F9',
    marginLeft: "auto",
    marginRight: "auto",
    width: '50%',
    height: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
