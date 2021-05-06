import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MainHeaderButton from "../Components/MainHeaderButton";

const FilterScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Filter Screen !</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FilterScreen;
