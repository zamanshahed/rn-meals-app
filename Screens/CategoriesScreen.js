import React from "react";
import { StyleSheet, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MainHeaderButton from "../Components/MainHeaderButton";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTiles from "../Components/CategoryGridTiles";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTiles
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate("CategoryMeals", {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meal Categories",
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
});

export default CategoriesScreen;
