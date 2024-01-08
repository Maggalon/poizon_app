import { View, Text } from "react-native";
import React, {useEffect, useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Good from "../Screens/Good";
import Basket from "../Screens/Basket";
import Buy from "../Screens/Buy";

const Stack = createStackNavigator();
export default function BasketStackNavigation({basket, setBasket}) {
  //const [basketSize, setBasketSize] = 
  useEffect(() => {
    console.log('basket rendered' + basket);

  }, [])

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BasketScreen">{() => <Basket basket={basket} />}</Stack.Screen>
      <Stack.Screen name="Good">{() => <Good basket={basket} setBasket={setBasket} />}</Stack.Screen>
      <Stack.Screen name="Buy" component={Buy} />
    </Stack.Navigator>
  );
}