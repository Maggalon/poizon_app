import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import Colors from "./assets/Shared/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import Login from "./App/Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigation/TabNavigation";
import Home from "./App/Screens/Home";

// editable для TextInput - можно редачить или нет
//оч полезно для изменения профиля

export default function App() {
  const [fontsLoaded] = useFonts({
    appFont: require("./assets/fonts/Judson-Regular.ttf"),
    appFontBold: require("./assets/fonts/Judson-Bold.ttf"),
    appFontItalic: require("./assets/fonts/Judson-Italic.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    // <Login/>
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
