import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../Screens/CategoriesScreen";
import CategoryMealsScreen from "../Screens/CategoryMealsScreen";
import MealDetailsScreen from "../Screens/MealDetailsScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import FilterScreen from "../Screens/FilterScreen";

import Colors from "../constants/Colors";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetails: {
      screen: MealDetailsScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavNavStack = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConf = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Favourites: {
    screen: FavNavStack,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="heart" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const FavMealsNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConf, {
        activeColor: "white",
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConf, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
          labelStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
        },
      });
const FilterNavigator = createStackNavigator(
  {
    Filters: FilterScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "Filters..",
    },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: FavMealsNavigator,
      navigationOptions: { drawerLabel: "Meals.." },
    },
    Filters: FilterNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontWeight: "bold",
      },
    },
  }
);

export default createAppContainer(MainNavigator);
