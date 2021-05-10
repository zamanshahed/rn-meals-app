import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./MealItem";

const MealList = (props) => {
  const isFavouriteMeal = useSelector((state) => state.meals.favMeals);

  const renderMealItem = (itemData) => {
    const isMealFav = isFavouriteMeal.some(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        OnMealSelect={() => {
          props.navigation.navigate("MealDetails", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
            isFavMeal: isMealFav,
          });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
