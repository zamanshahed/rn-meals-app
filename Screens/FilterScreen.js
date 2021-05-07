import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MainHeaderButton from "../Components/MainHeaderButton";

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleText}>Available filters...</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten Free</Text>
        <Switch />
      </View>
    </View>
  );
};

FilterScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filtering Meals",
    headerLeft: (
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
    // justifyContent: "center",
    alignItems: "center",
  },
  filterContainer: {
    width: "80%",
    flexDirection: "row ",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 22,
    margin: 12,
    textAlign: "center",
  },
});

export default FilterScreen;
