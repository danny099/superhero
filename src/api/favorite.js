import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

export async function getSuperHerosFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || "[]");
  } catch (error) {
    throw error;
  }
}

export async function addSuperHeroFavoriteApi(id) {
  try {
    const favorites = await getSuperHerosFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isSuperHeroFavoriteApi(id) {
  try {
    const response = await getSuperHerosFavoriteApi();
    return includes(response, id);
  } catch (error) {
    throw error;
  }
}

export async function removeSuperHeroFavoriteApi(id) {
  try {
    const favorites = await getSuperHerosFavoriteApi();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (error) {
    throw error;
  }
}
