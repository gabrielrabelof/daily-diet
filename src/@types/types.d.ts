interface Meal {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  status: boolean;
}

interface GroupedMeals {
  [key: string]: Meal[];
}

interface TransformedMeal {
  date: string;
  meals: Meal[];
}
