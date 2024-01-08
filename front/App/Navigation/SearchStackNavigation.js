import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Screens/Search";
import GoodList from "../Components/Home/GoodList";
import ScreenForGoods from "../Screens/ScreenForGoods";
import Good from "../Screens/Good";

const Stack = createStackNavigator();
export default function SeacrhStackNavigation({categories}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchScreen">{() => <Search categories={categories} />}</Stack.Screen>
      <Stack.Screen name="CategoryItems" component={ScreenForGoods} />
      <Stack.Screen name="Good" component={Good} />
      <Stack.Screen name="ResultsSearchScreen" component={ScreenForGoods} />
    </Stack.Navigator>
  );
}
