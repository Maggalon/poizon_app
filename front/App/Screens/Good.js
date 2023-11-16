import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Colors from "../../assets/Shared/Colors";
import SmallButton from "../Components/SmallButton";
import Star from "../../assets/star-for-rate.svg";

export default function Good() {
  const param = useRoute().params;
  const item = param?.item;
  const addToBasket = () => {
    console.log("add to basket");
  };
  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.good_container}
        showsVerticalScrollIndicator={false}
      >
        <Image sourse={item.image} style={styles.image_for_good} />
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
            Душа моя озарена неземной радостью, как эти чудесные весенние утра,
            которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую
            в здешнем краю, словно созданном для таких, как я. Я так счастлив,
            мой друг, так упоен ощущением покоя, что искусство мое страдает от
            этого. Ни одного штриха не мог бы я сделать, а никогда не был таким
            большим художником, как в эти минуты. Когда от милой моей долины
            поднимается пар и полдневное солнце стоит над непроницаемой чащей
            темного леса и шел, шел, очень долго шел, чтобы за дальними далями,
            высокими горами найти то, не знаю что и отнетси тому, не знаю кому.
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          position: "absolute",
          top: "91%",
        }}
      >
        <SmallButton title={"В корзину"} width={"65%"} onPress={addToBasket} />
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
