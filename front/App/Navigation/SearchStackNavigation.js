import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../Screens/Search";
import GoodList from "../Components/Home/GoodList";
import ScreenForGoods from "../Screens/ScreenForGoods";
import Good from "../Screens/Good";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../../assets/Shared/Colors";
import RestoreHeader from "../Components/SearchScreen/RestoreHeader";
import Back from "../../assets/active-icons/back.svg";

const Stack = createStackNavigator();

export default function SeacrhStackNavigation({
  basket,
  setBasket,
  categories,
  goods,
}) {
  const [categoryName, setCategoryName] = useState("");
  const setName = (name) => {
    console.log(name);
    setCategoryName(name);
  };
  const sex = [
    {
      name: "Мужская",
    },
    {
      name: "Женская",
    },
  ];
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.black,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: 100,
        },
        headerTitle: () => {
          <RestoreHeader goods={goods} />;
        },
        headerBackImage: () => <Back />,
        headerRight: () => <RestoreHeader goods={goods} />,
        headerRightContainerStyle: {
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Stack.Screen name="SexOptionScreen">
        {() => (
          <Search
            categories={sex}
            op="sex"
            handlerFunction={setName}
            goods={goods}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="SexCategoriesScreen">
        {() => <Search categories={categories} op="items" goods={goods} />}
      </Stack.Screen>
      <Stack.Screen name="CategoryItems" component={ScreenForGoods} />
      <Stack.Screen name="Good">
        {() => <Good basket={basket} setBasket={setBasket} />}
      </Stack.Screen>
      <Stack.Screen name="ResultsSearchScreen" component={ScreenForGoods} />
    </Stack.Navigator>
  );
}
