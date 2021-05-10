import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVOURITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      const existingIndex = state.favMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favMeals: updatedFavMeals };
      } else {
        const newMeal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favMeals: state.favMeals.concat(newMeal) };
      }

    default:
      return state;
  }
};

export default mealsReducer;
