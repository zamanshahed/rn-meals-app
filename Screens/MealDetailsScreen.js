import React, { useEffect, useCallback } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import MainHeaderButton from "../Components/MainHeaderButton";
import { toggleDrawer, toggleFavourite } from "../store/actions/meals";

const ListItem = (props) => {
  return (
    <View style={styles.listStyle}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");

  const isFavoriteMeal = useSelector((state) =>
    state.meals.favMeals.some((meal) => meal.id === mealId)
  );

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();

  const toggleFavHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ togglefav: toggleFavHandler });

    //[bug] will slow down loading title
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
  }, [toggleFavHandler]);

  //for fav-icon-dynamic
  useEffect(() => {
    props.navigation.setParams({
      isFavMeal: isFavoriteMeal,
    });
  }, [isFavoriteMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text>Cooking Time: {selectedMeal.duration}m</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
      </View>

      <View style={styles.keyText}>
        {selectedMeal.isVeagan ? <Text>Veagan</Text> : <Text>Vegetarian</Text>}

        {selectedMeal.isGlutenFree ? (
          <Text>Gluten Free</Text>
        ) : (
          <Text>Contains Gluten</Text>
        )}

        {selectedMeal.isLactoseFree ? (
          <Text>Lactose Free</Text>
        ) : (
          <Text>Contains Lactose</Text>
        )}
      </View>

      <Text style={styles.textTitle}>Ingredients</Text>
      {selectedMeal.ingradients.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}

      <Text style={styles.textTitle}>Steps</Text>
      {selectedMeal.steps.map((item) => (
        <ListItem key={item}>{item}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFav = navigationData.navigation.getParam("togglefav");
  const isFav = navigationData.navigation.getParam("isFavMeal");

  // const mealId = navigationData.navigation.getParam("mealId");
  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MainHeaderButton}>
        <Item
          title="favourite"
          iconName={isFav ? "heart" : "heart-outline"}
          onPress={toggleFav}
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
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-around",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 18,
  },
  listStyle: {
    marginVertical: 3,
    marginHorizontal: 22,
    borderColor: "#ccc",
    borderRadius: 21,
    borderWidth: 3,
    padding: 10,
  },
  keyText: {
    flexDirection: "row",
    padding: 9,
    marginVertical: 4,
    backgroundColor: "#ccc",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
  },
});

export default MealDetailsScreen;
