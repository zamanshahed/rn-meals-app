import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../data/dummy-data";
import MainHeaderButton from "../Components/MainHeaderButton";

const ListItem = (props) => {
  return (
    <View style={styles.listStyle}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <Text>Cooking Time: {selectedMeal.duration}m</Text>
        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
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
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={MainHeaderButton}>
        <Item
          title="favourite"
          iconName="heart"
          onPress={() => {
            console.log("fav button pressed !");
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
  },
  listStyle: {
    marginVertical: 11,
    marginHorizontal: 22,
    borderColor: "#ccc",
    borderRadius: 21,
    borderWidth: 3,
    padding: 12,
  },
});

export default MealDetailsScreen;
