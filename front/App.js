import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import Login from "./App/Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigation/TabNavigation";
import "react-native-gesture-handler";

// editable для TextInput - можно редачить или нет
//оч полезно для изменения профиля

export default function App() {
  const [fontsLoaded] = useFonts({
    appFont: require("./assets/fonts/Roboto-Regular.ttf"),
    appFontBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  if (!fontsLoaded) {
    return null;
  }
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('user_data')
    } catch(e) {
      // remove error
      console.log(e)
    }
  
    console.log('Done.')
  }
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user_data');
      setIsLoggedIn(value != null ? JSON.parse(value) : null)
      //console.log(value)
    } catch (e) {
      // error reading value
    }
    
  };
  //removeValue()
  getData()
  
  //console.log(isLoggedIn)
  if (isLoggedIn === null) {
    return (
      <Login/>
    );
  } else {
    return (
      //<Login/>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <TabNavigation userData={isLoggedIn} />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
