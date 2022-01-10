import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../screens/Favorite";
import SuperHeroScreen from "../screens/SuperHero";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ title: "Favorites"}}
      />
      <Stack.Screen
        name="SuperHero"
        component={SuperHeroScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
