import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Good from "../Screens/Good";
import Home from "../Screens/Home";

const Stack = createStackNavigator();
export default function HomeStackNavigation({basket, setBasket, goods}) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" >{() => <Home allGoods={goods} />}</Stack.Screen>
      <Stack.Screen name="Good">{() => <Good basket={basket} setBasket={setBasket} />}</Stack.Screen>
    </Stack.Navigator>
  );
}
