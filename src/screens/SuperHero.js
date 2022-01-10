import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { getSuperHeroDetailsApi } from "../api/superhero";
import Icon from "react-native-vector-icons/FontAwesome5";
import Header from "../components/SuperHero/Header";
import Stats from "../components/SuperHero/Stats";
import Biography from "../components/SuperHero/Biography";
import Favorites from "../components/SuperHero/Favorites";

export default function SuperHero(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [superhero, setSuperHero] = useState(null);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Favorites id={superhero?.id}/>,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, superhero]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getSuperHeroDetailsApi(params.id);
        setSuperHero(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!superhero) return null;
  return (
    <ScrollView>
      <Header
        name={superhero.name}
        image={superhero.image}
      />
      <Biography biography={superhero.biography}/>
      <Stats stats={superhero.powerstats}/>
    </ScrollView>
  );
}
