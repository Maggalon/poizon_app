import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, {useState, useEffect} from "react";
import { useRoute } from "@react-navigation/native";
import Colors from "../../assets/Shared/Colors";
import SmallButton from "../Components/SmallButton";
import Star from "../../assets/star-for-rate.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Good({basket, setBasket}) {
  const param = useRoute().params;
  const item = param?.item;

  //const [basket, setBasket] = useState([])
  //const [isInBasket, setIsInBasket] = useState(false)
  const [n, setN] = useState(0)

  useEffect(() => {
    console.log(basket);
    for (let i = 0; i < basket.length; i++) {
      if (basket[i] == item) {
        //isInBasket = true;
        var els = basket[i].price.split(" ")
        setN(Number(els[els.length - 1]))
        break;
      }
    }
    console.log(n);
  }, [])

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('basket', jsonValue);
    } catch (e) {
      // saving error
      console.log(e)
    }
  };

  const addToBasket = async (op) => {
      try {
        // const value = await AsyncStorage.getItem('basket');
        // console.log("recieved " + value);
        // var newBasket = []
        // if (value === null) {
        //   newBasket = [item]
        // } else {
        //   newBasket = [
        //     ...JSON.parse(value),
        //     item
        //   ]
        // }
        
        // setBasket(value != null ? JSON.parse(value) : [])
        // setBasket([
        //   ...basket,
        //   item
        // ])
        var num = n
        
        if (op == "add") {
          num = num + 1
        } else {
          num = num - 1 < 0 ? 0 : num - 1
        }
        if (num == 1 && op == "add") {
          item.price = item.price + ` x ${num}`  
          setBasket([...basket, item])
          storeData([...basket, item])
        } else if (num == 0) {
          basket = basket.filter(good => good != item)
          item.price = item.price.split("₽")[0] + `₽`
          setBasket([...basket])
          storeData([...basket])
        }
        else {
          item.price = item.price.split("₽")[0] + `₽ x ${num}`
          setBasket([...basket])
          storeData([...basket])
        }
        
        if (op == "add") {
          setN(n + 1)
        } else {
          setN(n - 1 < 0 ? 0 : n - 1)
        }
        //setBasket([...basket, item])
        //setIsInBasket(true)
        // const jsonValue = JSON.stringify(newBasket);
        // console.log("sent" + jsonValue);
        // await AsyncStorage.setItem('basket', jsonValue);
        //console.log(value)
      } catch (e) {
        // error reading value
        console.log(e);
      }
    
    
  };

  
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.good_container}
        showsVerticalScrollIndicator={false}
      >
        <Image source={{ uri: item.image }} style={styles.image_for_good} />
        <View style={styles.good_info}>
          <Text style={styles.label_text}>{item.label}</Text>
          <View style={styles.rate_view}>
            <Star />
            <Text style={styles.rate_text}>{item.rate}</Text>
          </View>
          <Text style={styles.price_text}>{item.price}</Text>
        </View>
        <View style={{ width: "87%", gap: 5 }}>
          <Text style={styles.description_title}>Описание</Text>
          <Text style={styles.description}>
            {item.description}
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          position: "absolute",
          top: n > 0 ? "80%" : "91%",
        }}
      >
        <SmallButton title={"В корзину"} width={"65%"} onPress={() => addToBasket("add")} />
        {n > 0 ? <SmallButton title={"Из корзины"} width={"65%"} onPress={() => addToBasket("sub")} /> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  good_container: {
    alignItems: "center",
    margin: 8,
    marginVertical: 20,
    paddingBottom: 90,
  },
  image_for_good: {
    width: 350,
    height: 360,
    backgroundColor: Colors.dark_gray,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 10,
  },
  good_info: {
    width: "87%",
    flexDirection: "column",
    gap: 4,
    marginVertical: 6,
  },
  label_text: {
    fontFamily: "appFontBold",
    fontSize: 27,
  },
  rate_view: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 5,
    alignItems: "center",
  },
  rate_text: {
    fontFamily: "appFont",
    fontSize: 20,
  },
  price_text: {
    fontFamily: "appFontBold",
    fontSize: 20,
  },
  description_title: {
    fontFamily: "appFont",
    fontSize: 23,
  },
  description: {
    fontFamily: "appFont",
    fontSize: 16.5,
  },
});
