import AsyncStorage from "@react-native-async-storage/async-storage";

import { mealsGetAll } from "./mealsGetAll";

import { AppError } from "@utils/AppError";

import { MEAL_COLLECTION } from "@storage/storageConfig";


export async function mealCreate(meal: Meal) {
  try {
    const storedMeals = await mealsGetAll() 

    const mealAlreadyExists = storedMeals.some(
      (storedMeal) => storedMeal.date === meal.date && storedMeal.time === meal.time
    )

    if (mealAlreadyExists) {
      throw new AppError("This meal already exists.")
    }

    const updatedMeals = [...storedMeals, meal]
    const storage = JSON.stringify(updatedMeals)

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}