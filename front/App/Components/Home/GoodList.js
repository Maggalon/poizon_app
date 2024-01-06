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

export default function GoodList({ goodsList, title }) {
  const navigation = useNavigation();

  const addToBasket = () => {
    console.log("add to basket");
  };
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.good_item}
        onPress={() => navigation.navigate("Good", { item: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image_for_good} />
        <View style={{ width: "90%", display: "flex", gap: 2 }}>
          <Text style={styles.label_text}>{item.label}</Text>
          <View style={styles.rate_view}>
            <Star />
            <Text style={styles.rate_text}>{item.rate}</Text>
          </View>
          <Text style={styles.price_text}>{item.price}</Text>
        </View>

        <SmallButton
          title={"В корзину"}
          width={"100%"}
          height={30}
          onPress={addToBasket}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ alignItems: "center", margin: 10 }}>
      {title ? (
        <View style={{width: '95%'}}>
          <Text style={styles.search_results}>{title}</Text>
        </View>
      ) : null}
      <FlatList data={goodsList} renderItem={renderItem} numColumns={2} />
    </View>
  );
}

const styles = StyleSheet.create({
  good_item: {
    alignItems: "center",
    backgroundColor: Colors.white,
    width: 182,
    height: "auto",
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
  search_results: {
    fontFamily: "appFontBold",
    fontSize: 28,
  },
});
