import { View, Text } from "react-native";
import React, {useEffect, useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Good from "../Screens/Good";
import Basket from "../Screens/Basket";
import Buy from "../Screens/Buy";
import Colors from "../../assets/Shared/Colors";
import Back from "../../assets/active-icons/back.svg";

const Stack = createStackNavigator();

export default function BasketStackNavigation({basket, setBasket}) {
  //const [basketSize, setBasketSize] = 
  useEffect(() => {
    console.log('basket rendered' + basket);

  }, [])

  return (
    <Stack.Navigator screenOptions={{
      headerTitle: "Барыги",
      headerStyle: {
        backgroundColor: Colors.black,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 100,
      },
      headerTitleStyle: {
        color: Colors.white,
        fontFamily: "appFontBold",
        fontSize: 25,
        paddingLeft: 7,
      },
      headerBackImage: ()=>(<Back />),
    }}>
      <Stack.Screen name="BasketScreen">{() => <Basket basket={basket} />}</Stack.Screen>
      <Stack.Screen name="Good">{() => <Good basket={basket} setBasket={setBasket} />}</Stack.Screen>
      <Stack.Screen name="Buy" component={Buy} />
    </Stack.Navigator>
  );
}