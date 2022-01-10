import { API_HOST } from "../utils/constants";

export async function getSuperHeroApi() {
  try {
    const url = `${API_HOST}/search/a`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getSuperHeroDetailsApi(id) {
  try {
    const url = `${API_HOST}/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getSuperHeroSearchApi(text) {
  try {
    const url = `${API_HOST}/search/${text}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
