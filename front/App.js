import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import Login from "./App/Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigation/TabNavigation";
import "react-native-gesture-handler";
import axios from "axios";

// editable для TextInput - можно редачить или нет
//оч полезно для изменения профиля

export default function App() {
  const [fontsLoaded] = useFonts({
    appFont: require("./assets/fonts/Roboto-Regular.ttf"),
    appFontBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });
  const [userData, setUserData] = useState(null);
  const [basket, setBasketItems] = useState(null);
  const [categories, setCategories] = useState(null);
  const [goods, setGoods] = useState(null);
  //const [isLoggedIn, setIsLoggedIn] = useState(false)

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("user_data");
    } catch (e) {
      // remove error
      console.log(e);
    }

    console.log("Done.");
  };
  const getData = async (name, handlerFunction) => {
    //console.log('getting user info');
    try {
      const value = await AsyncStorage.getItem(name);
      handlerFunction(value != null ? JSON.parse(value) : null);
      console.log(`${name}: ${value}`);
    } catch (e) {
      // error reading value
    }
  };

  const setBasket = (basket) => {
    console.log("basket update");
    console.log(basket);
    setBasketItems(basket);
  };

  const getCategories = async () => {
    try {
      await axios
        .get("http://192.168.0.28:1000/api/all-categories")
        .then((res) => {
          console.log(res.data);
          setCategories(res.data);
        })
        .catch((e) => console.log(e.message));
    } catch (e) {
      console.log(e);
    }
    //console.log(allCategories);
    // setCategories(allCategories.map(category => {
    //   return {
    //     name: category.name,
    //     navigation: navigation,
    //     goodsToDisplay: allGoods.filter(item => item.category === category.name),
    //   }

    // }))
  };

  const getGoods = async () => {
    try {
      await axios
        .get("http://192.168.0.28:1000/api/all-products")
        .then((res) => {
          //console.log(res);

          setGoods(
            res.data.map((item) => {
              //console.log(item.description);
              item.file = item.file.replace("uploads\\", "");
              item.file = item.file.replace("\\", "/");
              return {
                id: item.id,
                image: `http://192.168.0.28:1000/${item.file}`, // require(`../../../server/${item.file.replace("\\", "/")}`)
                label: item.name,
                rate: item.rating,
                price: item.price + "₽",
                description: item.description,
                category: item.category,
                gender: item.gender,
              };
            })
          );
        })
        .catch((e) => console.log(e.message));
    } catch (e) {
      console.log(e);
    }
  };
  //
  useEffect(() => {
    //removeValue()
    getData("user_data", setUserData);
    getData("basket", setBasketItems);
    getCategories();
    getGoods();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  //console.log(userData)
  if (userData == null) {
    return <Login setUserData={setUserData} />;
  } else {
    return (
      //<Login/>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <TabNavigation
            userData={userData}
            basket={basket}
            setBasket={setBasket}
            categories={categories}
            goods={goods}
          />
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
