import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealsGetAll } from "./mealsGetAll";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealRemove(mealData: Meal) {
  try {
    const storage = await mealsGetAll()

    const filtered = storage.filter(meal => meal.id !== mealData.id)

    const meals = JSON.stringify(filtered)

    await AsyncStorage.setItem(MEAL_COLLECTION, meals)
  } catch (error) {
    throw error
  }
}
