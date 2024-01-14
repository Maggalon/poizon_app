import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Star from "../../assets/star-for-rate.svg";
import SmallButton from "../Components/SmallButton";
import Colors from "../../assets/Shared/Colors";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Basket({ basket }) {
  //const [allGoods, setAllGoods] = useState(basket)
  //console.log('from basket' + allGoods);
  //console.log('from basket');
  // const getData = async () => {
  //   try {
  //     var value = await AsyncStorage.getItem('basket');
  //     setAllGoods(value != null ? JSON.parse(value) : null)
  //     //console.log([...new Set(allGoods)])
  //   } catch (e) {
  //     // error reading value
  //     console.log(e);
  //   }

  // };

  // const removeValue = async () => {
  //   try {
  //     await AsyncStorage.removeItem('basket')
  //   } catch(e) {
  //     // remove error
  //     console.log(e)
  //   }

  //   console.log('Done.')
  // }
  // useFocusEffect(() => {
  //   console.log('basket focused');
  //   getData()
  // })
  // useEffect(() => {
  //   console.log('render');

  //   //removeValue()
  // }, [])

  const buyItems = () => {
    console.log("вы счастливый обладатель одежды");
    navigation.navigate("Buy", { itemList: basket });
  };
  const navigation = useNavigation();
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.good_item}
        onPress={() => navigation.navigate("Good", { item: item })}
      >
        <Image source={{ uri: item.image }} style={styles.image_for_good} />
        <View style={{ width: "60%", display: "flex", gap: 6 }}>
          <Text style={styles.label_text}>{item.label}</Text>
          <View style={styles.rate_view}>
            <Star />
            <Text style={styles.rate_text}>{item.rate}</Text>
          </View>
          <Text style={styles.price_text}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (basket == []) {
    return (
      <View>
        <Text style={styles.price_text}>{item.price}</Text>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "center", margin: 12,}}>
        <FlatList
          data={basket}
          renderItem={renderItem}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={<View></View>}
          ListFooterComponentStyle={{paddingBottom:55}}
        />
        <View
          style={{
            width: "100%",
            alignItems: "center",
            position: "absolute",
            top: "91%",
          }}
        >
          <SmallButton title={"Купить"} width={"65%"} onPress={buyItems} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  good_item: {
    alignItems: "center",
    backgroundColor: Colors.white,
    justifyContent: "center",
    height: "auto",
    borderRadius: 10,
    margin: 8,
    padding: 15,
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  image_for_good: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
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
