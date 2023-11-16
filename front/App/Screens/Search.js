import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../assets/Shared/Colors";

export default function Search() {
  const goods_for_men = [
    {
      id: "01",
      image: require("../../assets/for-goods/image1.jpg"),
      label: "Кофта сиреневая",
      rate: "4.9",
      price: "1306₽",
    },
    {
      id: "02",
      image: require("../../assets/for-goods/image2.jpg"),
      label: "Белое пальто",
      rate: "4.59",
      price: "1468₽",
    },
    {
      id: "03",
      image: require("../../assets/for-goods/image3.jpg"),
      label: "Желтая куртка",
      rate: "4.47",
      price: "56827₽",
    },
  ];
  const goods_for_women = [
    {
      id: "04",
      image: require("../../assets/for-goods/image4.jpeg"),
      label: "Бежевое пальто",
      rate: "3.02",
      price: "4893₽",
    },
    {
      id: "05",
      image: require("../../assets/for-goods/image5.jpeg"),
      label: "Брючный костюм",
      rate: "4.20",
      price: "86549₽",
    },
    {
      id: "06",
      image: require("../../assets/for-goods/image6.jpeg"),
      label: "Голубая кофта",
      rate: "4.19",
      price: "15₽",
    },
  ];

  const categoryNames = ["Мужское", "Женское"];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CategoryItems", { goods: goods_for_men })
        }
        style={styles.category_style}
      >
        <ImageBackground
          source={require("../../assets/category-back.png")}
          style={styles.background_image}
        />
        <View style={{ position: "absolute", top: 14, left: 14 }}>
          <Text style={styles.category_name}>{categoryNames[0]}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CategoryItems", { goods: goods_for_women })
        }
        style={styles.category_style}
      >
        <ImageBackground
          source={require("../../assets/category-back.png")}
          style={styles.background_image}
        />
        <View style={{ position: "absolute", top: 14, left: 14 }}>
          <Text style={styles.category_name}>{categoryNames[1]}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
  background_image: {
    width: 160,
    height: 160,
  },
  category_style: {
    margin: 8,
  },
  category_name: {
    fontFamily: "appFont",
    fontSize: 20,
    color: Colors.white,
  },
});
