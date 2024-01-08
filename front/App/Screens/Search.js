import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import Grid from "@react-css/grid";
import React, { useState, useEffect } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Colors from "../../assets/Shared/Colors";
import axios from "axios";
import { withRepeat } from "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";

const { width } = Dimensions.get('window');
const windowWidth = width;

const Category = ({item}) => {
  //const navigation = useNavigation();
  // const [goodsToDisplay, setGoodsToDisplay] = useState([]);

  // const getGoods = async () => {
  //   try {
  //     await axios.get("http://192.168.1.45:1000/api/all-products").then(res => {
  //       //console.log(res.data[0]);
        
  //       setGoodsToDisplay(res.data.filter(item => item.category === category.name).map(item => {
  //         //console.log(item.description);
  //         return {
  //           id: item.id,
  //           image: `http://192.168.1.45:1000/${item.file.replace("uploads\\", "")}`, // require(`../../../server/${item.file.replace("\\", "/")}`)
  //           label: item.name,
  //           rate: item.rating,
  //           price: "1306₽",
  //           description: item.description
  //         }
  //       }))
  //     }).catch((e) => console.log(e.message))
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }

  return <TouchableOpacity
            onPress={() => {
              //getGoods();
              // item.navigation.navigate("CategoryItems", { goods: item.goodsToDisplay })
              // console.log(item.goodsToDisplay);
            }
            }
            style={styles.category_style}
          >
            <ImageBackground
              source={require("../../assets/category-back.png")}
              style={styles.background_image}
            />
            <View style={{ position: "absolute", top: 14, left: 25 }}>
              <Text style={styles.category_name}>{item.name}</Text>
            </View>
          </TouchableOpacity>
}

export default function Search({categories}) {

  const navigation = useNavigation();
  //const [categories, setCategories] = useState([]);
  const [allGoods, setAllGoods] = useState([]);

  const sex = [
    {
      name: "Мужское"
    },
    {
      name: "Женское"
    }
  ]

  const getGoods = async () => {
    try {
      await axios.get("http://192.168.1.45:1000/api/all-products").then(res => {
        //console.log(res.data[0]);
        
        setAllGoods(res.data.map(item => {
          //console.log(item.description);
          return {
            id: item.id,
            image: `http://192.168.1.45:1000/${item.file.replace("uploads\\", "")}`, // require(`../../../server/${item.file.replace("\\", "/")}`)
            label: item.name,
            rate: item.rating,
            price: "1306₽",
            description: item.description,
            category: item.category
          }
        }))
      }).catch((e) => console.log(e.message))
    }
    catch (e) {
      console.log(e);
    }
  }

  // useFocusEffect(() => {
  //   getGoods();
  //   console.log(allGoods);
  //   // let allCategories = []
  //   // const getCategories = async () => {
  //   //   try {
  //   //     await axios.get("http://192.168.1.45:1000/api/all-categories").then(res => {
  //   //       //console.log(res.data);
  //   //       allCategories = res.data;
          
  //   //     }).catch((e) => console.log(e.message))
  //   //   }
  //   //   catch (e) {
  //   //     console.log(e);
  //   //   }
  //   //   //console.log(allCategories);
  //   //   setCategories(allCategories.map(category => {
  //   //     return {
  //   //       name: category.name,
  //   //       navigation: navigation,
  //   //       goodsToDisplay: allGoods.filter(item => item.category === category.name),
  //   //     }
        
  //   //   }))
  //   // }
  //   // getCategories()
  //   //console.log(categories);
  // })

  
  return (
    <View style={styles.container}>
      <FlatList 
        data={sex}
        numColumns={2}
        renderItem={Category}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2, // the number of columns you want to devide the screen into
    //marginHorizontal: "auto",
    width: windowWidth
  },
  background_image: {
    width: 160,
    height: 160,
  },
  category_style: {
    flex: 1,
    maxWidth: "50%", // 100% devided by the number of rows you want
    alignItems: "center",
    margin: 8,
  },
  category_name: {
    fontFamily: "appFont",
    fontSize: 20,
    color: Colors.white,
    //margin: 10
  },
});
