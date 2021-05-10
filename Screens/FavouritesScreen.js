import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";

import MealList from "../Components/MealList";
import MainHeaderButton from "../Components/MainHeaderButton";

const FavouritesScreen = (props) => {
  const myFavMeals = useSelector((state) => state.meals.favMeals);

  //dummy fav list
  // const myFavMeals = MEALS.filter(
  //   (meal) => meal.id === "m3" || meal.id === "m2"
  // );

  //check if no favMeal !
  if (myFavMeals.length === 0 || !myFavMeals) {
    return (
      <View style={styles.screen}>
        <Text style={styles.textStyle}>
          No favourites! Start adding some...
        </Text>
      </View>
    );
  }

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
  textStyle: {
    fontSize: 18,
  },
});

export default FavouritesScreen;
