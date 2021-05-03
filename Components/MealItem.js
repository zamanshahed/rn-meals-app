import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItemContainer}>
      <TouchableOpacity onPress={props.OnMealSelect}>
        <View>
          <View style={{ ...styles.mealRowContainer, ...styles.mealHeader }}>
            <Text>{props.title}</Text>
          </View>
          <View style={{ ...styles.mealRowContainer, ...styles.mealDetails }}>
            <Text>Cooking Time: {props.duration}m</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItemContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
  mealRowContainer: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "80%",
  },
  mealDetails: {
    paddingHorizontal: 11,
    justifyContent: "space-between",
  },
});

export default MealItem;
