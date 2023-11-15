import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Good from '../Screens/Good';
import Home from '../Screens/Home';


const Stack = createStackNavigator();
export default function HomeStackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name = 'HomeScreen' component={Home}/>
      <Stack.Screen name="Good" component={Good}/>
    </Stack.Navigator>
  )
}