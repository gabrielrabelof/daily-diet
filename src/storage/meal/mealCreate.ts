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
      throw new AppError("You already have a meal scheduled for this day and time.")
    }

    const updatedMeals = [meal, ...storedMeals]
    const storage = JSON.stringify(updatedMeals)

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}