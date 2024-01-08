import { View, Text } from "react-native";
import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Screens/Search";
import GoodList from "../Components/Home/GoodList";
import ScreenForGoods from "../Screens/ScreenForGoods";
import Good from "../Screens/Good";

const Stack = createStackNavigator();
export default function SeacrhStackNavigation({basket, setBasket, categories, goods}) {

  const [categoryName, setCategoryName] = useState("")

  const setName = (name) => {
    console.log(name);
    setCategoryName(name)
  }

  const sex = [
    {
      name: "Мужская"
    },
    {
      name: "Женская"
    }
  ]

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SexOptionScreen">{() => <Search categories={sex} op="sex" handlerFunction={setName} goods={goods} />}</Stack.Screen>
      <Stack.Screen name="SexCategoriesScreen">{() => <Search categories={categories} op="items" goods={goods} />}</Stack.Screen>
      <Stack.Screen name="CategoryItems" component={ScreenForGoods} />
      <Stack.Screen name="Good">{() => <Good basket={basket} setBasket={setBasket} />}</Stack.Screen>
      <Stack.Screen name="ResultsSearchScreen" component={ScreenForGoods} />
    </Stack.Navigator>
  );
}
