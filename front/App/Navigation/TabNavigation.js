import { View, Text, Button } from "react-native";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Basket from "../Screens/Basket";
import Profile from "../Screens/Profile";
import BasketActive from "../../assets/active-icons/basket-active.svg";
import SearchActive from "../../assets/active-icons/search-active.svg";
import HomeActive from "../../assets/active-icons/home-active.svg";
import ProfileActive from "../../assets/active-icons/profile-active.svg";
import Colors from "../../assets/Shared/Colors";
import HomeInactive from "../../assets/inactive-icons/home-inactive.svg";
import SeacrhInactive from "../../assets/inactive-icons/search-inactive.svg";
import BasketInactive from "../../assets/inactive-icons/basket-inactive.svg";
import ProfileInactive from "../../assets/inactive-icons/profile-inactive.svg";
import HomeStackNavigation from "./HomeStackNavigation";
import SeacrhStackNavigation from "./SearchStackNavigation";
import BasketStackNavigation from "./BasketStackNavigation";
import { useNavigation, useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function TabNavigation({
  userData,
  basket,
  setBasket,
  categories,
  goods,
}) {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        title: "Барыги",
        tabBarStyle: {
          backgroundColor: Colors.black,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: 60,
        },
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
      }}
    >
      <Tab.Screen
        name="Home"
        children={() => (
          <HomeStackNavigation
            basket={basket}
            setBasket={setBasket}
            goods={goods}
          />
        )}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) =>
            tabInfo.focused ? <HomeActive /> : <HomeInactive />,
        }}
      />
      <Tab.Screen
        name="Search"
        children={() => (
          <SeacrhStackNavigation
            basket={basket}
            setBasket={setBasket}
            categories={categories}
            goods={goods}
          />
        )}
        options={{
          tabBarIcon: (tabInfo) =>
            tabInfo.focused ? <SearchActive /> : <SeacrhInactive />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Basket"
        children={() => (
          <BasketStackNavigation basket={basket} setBasket={setBasket} />
        )}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) =>
            tabInfo.focused ? <BasketActive /> : <BasketInactive />,
        }}
      />
      <Tab.Screen
        name="Profile"
        children={() => <Profile userData={userData} />}
        options={{
          tabBarIcon: (tabInfo) =>
            tabInfo.focused ? <ProfileActive /> : <ProfileInactive />,
        }}
      />
    </Tab.Navigator>
  );
}
