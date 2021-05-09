import React from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../Components/MealList";
import MainHeaderButton from "../Components/MainHeaderButton";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = (props) => {
  //dummy fav list
  const myFavMeals = MEALS.filter(
    (meal) => meal.id === "m3" || meal.id === "m2"
  );
  return <MealList listData={myFavMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "My Favourites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={MainHeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavouritesScreen;
