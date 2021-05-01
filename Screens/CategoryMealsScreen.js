import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { CATEGORIES } from "../data//dummy-data";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  headerName = selectedCategory.title;
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen !</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Meal Details"
        onPress={() => {
          props.navigation.navigate("MealDetails");
        }}
      />
      <Button
        title="Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
