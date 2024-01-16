import { View, Text, StyleSheet, ToastAndroid } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import Colors from "../../assets/Shared/Colors";
import SmallButton from "../Components/SmallButton";

export default function Buy() {
  
  const param = useRoute().params;
  const itemList = param?.itemList;
  const getAllPrice = (itemList) => {
    sum = 0;
    for (let i = 0; i < itemList.length; i++) {
      var price = Number(itemList[i].price.split("₽")[0])
      var n = Number(itemList[i].price.split('x ')[1])
      sum += price * n;
    }
    return sum;
  };
  function showToast() {
    ToastAndroid.show("Вы стали чуть-чуть красивее!", ToastAndroid.SHORT);
  }
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.one_good}>
        <Text style={styles.good_label}>{item.label}</Text>
        <Text style={styles.good_price}>{item.price}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.title_view}>
        <Text style={styles.title}>Оформление заказа</Text>
      </View>
      <View style={styles.goods_view}>
        <FlatList data={itemList} renderItem={renderItem} />
      </View>
      <View style={styles.order_view}>
        <Text style={styles.title}>Ваш заказ</Text>
        
      </View>
      <View style={{ width: "90%", flexDirection: 'column', marginTop: 10 }}>
        <View style={styles.order_view}>
          <Text style={styles.good_label}>Сумма заказа:</Text>
          <Text style={styles.good_price}>{getAllPrice(itemList)}₽</Text>
        </View>
        <View style={styles.order_view}>
          <Text style={styles.good_label}>Доставка:</Text>
          <Text style={styles.good_price}>Бесплатно</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          position: "absolute",
          top: "91%"
        }}
      >
        <SmallButton
          title={"Офомить заказ"}
          width={"65%"}
          onPress={showToast}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%"
  },
  title_view: {
    marginLeft: 15,
    marginTop: 5,
    width: "95%",
  },
  title: {
    fontFamily: "appFontBold",
    fontSize: 26,
  },
  goods_view: {
    height: "auto",
    backgroundColor: Colors.white,
    borderRadius: 20,
    width: "95%",
    marginVertical: 10,
    padding: 20,
  },
  one_good: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  good_label: {
    fontFamily: "appFont",
    fontSize: 17,
    maxWidth: '77%'
  },
  good_price: {
    fontFamily: "appFontBold",
    fontSize: 17,
  },
  order_view: {
    width: "93%",
    marginHorizontal: 15,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  count_goods: {
    fontFamily: "appFont",
    fontSize: 16,
  },
});
