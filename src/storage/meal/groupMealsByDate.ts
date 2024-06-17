import { mealsGetAll } from "./mealsGetAll";

export async function groupMealsByDate() {
  try {
    const storage = await mealsGetAll()

    const groupedMeals = storage.reduce<GroupedMeals>((acc, meal) => {
      if (!acc[meal.date]) {
        acc[meal.date] = []
      }
      acc[meal.date].push(meal)
      return acc
    }, {})

    return groupedMeals
  } catch (error) {
    throw error
  }
}
