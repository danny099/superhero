import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getSuperHeroApi } from "../api/superhero";
import { getSuperHeroDetailsApi } from "../api/superhero";

import SuperHeros from '../components/SuperHeros'
export default function SuperHeroList() {
  const [superheros, setSuperheros] = useState([]);


  useEffect(() => {
    (async () => {
      await loadSuperHeros();
    })();
  }, []);

  const loadSuperHeros = async () => {
    try {
      const response = await getSuperHeroApi();
      console.log(response)
      const superherosArray = [];
      for await (const item of response.results) {
        const superheroDetails = await getSuperHeroDetailsApi(item.id);
        superherosArray.push({
          id: superheroDetails.id,
          name: superheroDetails.name,
          image:
          superheroDetails.image["url"],
        });
      }

      setSuperheros([...superheros, ...superherosArray]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView>
      <SuperHeros superheros={superheros}/>
    </SafeAreaView>
  );
}
