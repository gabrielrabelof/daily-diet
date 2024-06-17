import { mealRemove } from './mealRemove';
import { mealCreate } from './mealCreate';

export async function mealEdit(oldMeal: Meal, updatedMeal: Meal) {
  try {
    await mealRemove(oldMeal)
    await mealCreate(updatedMeal)
  } catch (error) {
    throw error
  }
}
