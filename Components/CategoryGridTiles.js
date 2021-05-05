import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTiles = (props) => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{
          ...styles.categoryContainer,
          ...{ backgroundColor: props.color },
        }}
      >
        <Text style={styles.categoryTitle} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 12,
    height: 152,
  },
  categoryContainer: {
    flex: 1,
    borderRadius: 12,
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 11,
    elevation: 6,
    padding: 13,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right",
  },
});

export default CategoryGridTiles;
