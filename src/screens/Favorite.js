import React, { useState, useCallback } from "react";
import {  ScrollView, StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFocusEffect } from "@react-navigation/native";
import { getSuperHerosFavoriteApi } from "../api/favorite";
import { getSuperHeroDetailsApi } from "../api/superhero";
import SuperHeros from "../components/SuperHeros";

export default function Favorite() {
  const [superheros, setSuperHeros] = useState([]);
  const [superherosGender, setSuperHerosGender] = useState([]);
  const [order, setOrder] = useState('Unknown');
  const [gender, setGender] = useState('Unknown');

  useFocusEffect(
    useCallback(() => {
      searchFavorites()
    }, [])
  );

  const searchFavorites = async () => {
    const response = await getSuperHerosFavoriteApi();

    const superherosArray = [];
    for await (const id of response) {
      const superheroDetails = await getSuperHeroDetailsApi(id);
      superherosArray.push({
        id: superheroDetails.id,
        name: superheroDetails.name,
        image: superheroDetails.image.url,
        appearance: superheroDetails.appearance.gender
      });
    }

    setSuperHeros(superherosArray);
  }

  const changeOrder =  (value) => {
    setOrder(value)
    if (value === '1' ) {
      var s = superheros.sort(sortAlphabeticallyArray);
      var s = superherosGender.sort(sortAlphabeticallyArray);

    } else {
      var s = superheros.sort(sortArray);
      var s = superherosGender.sort(sortArray);
    }
  };

  const sortArray =  (x, y) => {

    if (x.name < y.name) {return -1;}
    if (x.name > y.name) {return 1;}
    return 0;
  };

  const sortAlphabeticallyArray =  (x, y) => {
    if (x.name > y.name) {return -1;}
    if (x.name < y.name) {return 1;}
    return 0;
  };

  const changeGender =  (value) => {

    setGender(value)

    if (value === '0' ) {
      searchFavorites()
      const superHerosGender = superheros.filter(superhero => {return superhero.appearance === 'Male'});

      setSuperHerosGender(superHerosGender);

    }
    if (value === '1' ) {
      searchFavorites()
      const superHerosGender = superheros.filter(superhero => {return superhero.appearance === 'Female'});
      setSuperHerosGender(superHerosGender);



    }
  };

  return (
    <ScrollView>
      <Text style={styles.filterText}>Filters</Text>
      <View style={styles.containerFilters}>
        <Picker
            selectedValue={order}
            onValueChange={(value, index) => changeOrder(value)}
            style={styles.picker}
        >
          <Picker.Item label="Order" value="Unknown" />
          <Picker.Item label="A-Z" value="0" />
          <Picker.Item label="Z-A" value="1" />
        </Picker>
        <Picker
          selectedValue={gender}
          onValueChange={(value, index) => changeGender(value)}
          style={styles.picker}
        >
          <Picker.Item label="Gender" value="Unknown" />
          <Picker.Item label="Male" value="0" />
          <Picker.Item label="Female" value="1" />
        </Picker>
      </View>
      {gender == "0" || gender == "1"
        ? <SuperHeros superheros={superherosGender} />
        : <SuperHeros superheros={superheros} />
      }

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
    width: "50%",
  },
  containerFilters: {
    marginTop: 0,
    marginBottom: 15,
    marginLeft: 0,
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: "row",
    height: 50,
    width: '100%',
  },
  filterText: {
    marginTop: 10,
    marginBottom: -60,
    marginLeft: 7,
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: "row",
    height: 50,
    width: '100%',
  },
});
