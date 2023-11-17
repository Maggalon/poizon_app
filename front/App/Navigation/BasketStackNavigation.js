import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Good from "../Screens/Good";
import Basket from "../Screens/Basket";
import Buy from "../Screens/Buy";

const Stack = createStackNavigator();
export default function BasketStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BasketScreen" component={Basket} />
      <Stack.Screen name="Good" component={Good} />
      <Stack.Screen name="Buy" component={Buy} />
    </Stack.Navigator>
  );
}