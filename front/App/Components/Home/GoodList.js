import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "../../../assets/Shared/Colors";
import Star from "../../../assets/star-for-rate.svg";
import SmallButton from "../SmallButton";
import { useNavigation } from "@react-navigation/native";

export default function GoodList() {
  const navigation = useNavigation();
  const allGoods = [
    {
      id: "01",
      image: require("../../../assets/for-goods/image1.jpg"),
      label: "Кофта сиреневая",
      rate: "4.9",
      price: "1306₽",
    },
    {
      id: "02",
      image: require("../../../assets/for-goods/image2.jpg"),
      label: "Белое пальто",
      rate: "4.59",
      price: "1468₽",
    },
    {
      id: "03",
      image: require("../../../assets/for-goods/image3.jpg"),
      label: "Желтая куртка",
      rate: "4.47",
      price: "56827₽",
    },
    {
      id: "04",
      image: require("../../../assets/for-goods/image4.jpeg"),
      label: "Бежевое пальто",
      rate: "3.02",
      price: "4893₽",
    },
    {
      id: "05",
      image: require("../../../assets/for-goods/image5.jpeg"),
      label: "Брючный костюм",
      rate: "4.20",
      price: "86549₽",
    },
    {
      id: "06",
      image: require("../../../assets/for-goods/image6.jpeg"),
      label: "Голубая кофта",
      rate: "4.19",
      price: "15₽",
    },
  ];
  const addToBasket = () => {
    console.log("add to basket");
  };
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.good_item} onPress={() => navigation.navigate('Good', {item: item})}>
        <Image source={item.image} style={styles.image_for_good} />
        <View style={{ width: "90%", display: "flex", gap: 2 }}>
          <Text style={styles.label_text}>{item.label}</Text>
          <View style={styles.rate_view}>
            <Star />
            <Text style={styles.rate_text}>{item.rate}</Text>
          </View>
          <Text style={styles.price_text}>{item.price}</Text>
        </View>

        <SmallButton title={"В корзину"} width={"100%"} height={30} onPress={addToBasket}/>
      </TouchableOpacity>
    );
  };
  

  return (
    <View style={{ alignItems: "center", margin: 10 }}>
      <FlatList data={allGoods} renderItem={renderItem} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  good_item: {
    alignItems: "center",
    backgroundColor: Colors.white,
    width: 182,
    height: 'auto',
    borderRadius: 10,
    margin: 8,
    padding: 10,
    overflow: "scroll",
  },
  image_for_good: {
    width: 140,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 5,
  },
  label_text: {
    fontFamily: "appFont",
    fontSize: 18,
  },
  rate_text: {
    fontFamily: "appFontBold",
    fontSize: 17,
  },
  rate_view: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 5,
    alignItems: "center",
  },
  price_text: {
    fontFamily: "appFontBold",
    fontSize: 16,
  },
});
