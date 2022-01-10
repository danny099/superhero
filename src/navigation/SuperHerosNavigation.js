import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SuperHerosListScreen from "../screens/SuperHerosList";
import SuperHeroScreen from "../screens/SuperHero";
import SearchHeroScreen from "../screens/Search";

const Stack = createStackNavigator();

export default function SuperHeroNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchHeroScreen" options={{ title: "Search super Heros"}} component={SearchHeroScreen} />
      <Stack.Screen name="SuperHerosList" options={{ title: "Super Heros List"}} component={SuperHerosListScreen} />
      <Stack.Screen name="SuperHero" component={SuperHeroScreen} options={{ title: "", headerTransparent: true }}/>
    </Stack.Navigator>
  );
}
