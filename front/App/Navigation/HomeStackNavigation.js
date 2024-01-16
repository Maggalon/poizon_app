import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Good from "../Screens/Good";
import Home from "../Screens/Home";
import Colors from "../../assets/Shared/Colors";
import { Ionicons } from '@expo/vector-icons';  
import Back from "../../assets/active-icons/back.svg";

const Stack = createStackNavigator();

export default function HomeStackNavigation({ basket, setBasket, goods }) {
  return (
    <Stack.Navigator
      screenOptions={{
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
      }}
    >
      <Stack.Screen name="HomeScreen">
        {() => <Home allGoods={goods} />}
      </Stack.Screen>
      <Stack.Screen name="Good">
        {() => <Good basket={basket} setBasket={setBasket} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
