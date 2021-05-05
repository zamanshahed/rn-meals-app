import React from "react";
import { StyleSheet } from "react-native";

import MealList from "../Components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = (props) => {
  //dummy fav list
  const myFavMeals = MEALS.filter(
    (meal) => meal.id === "m3" || meal.id === "m2"
  );
  return <MealList listData={myFavMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "My Favourites",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouritesScreen;
