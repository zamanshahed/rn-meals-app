import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props) => {
  return (
    <View style={styles.mealItemContainer}>
      <TouchableOpacity onPress={props.OnMealSelect}>
        <View>
          <View style={{ ...styles.mealRowContainer, ...styles.mealHeader }}>
            <ImageBackground source={{ uri: props.image }} style={styles.bgImg}>
              <Text style={styles.mealTitle} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
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
    backgroundColor: "#079992",
    borderRadius: 11,
    overflow: "hidden",
  },
  mealRowContainer: {
    flexDirection: "row",
  },
  mealHeader: {
    height: "85%",
  },
  mealDetails: {
    paddingHorizontal: 11,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  bgImg: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  mealTitle: {
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5) ",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
});

export default MealItem;
