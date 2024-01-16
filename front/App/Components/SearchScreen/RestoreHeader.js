import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../../assets/Shared/Colors";
import { TextInput } from "react-native";
import SmallButton from "../SmallButton";
import { useNavigation } from "@react-navigation/native";

export default function RestoreHeader({ goods }) {
  const navigation = useNavigation();
  const [searchInput, setsearchInput] = useState("");
  const handleSearchInput = () => {
    if (searchInput) {
      console.log(goods);
      navigation.navigate("ResultsSearchScreen", {
        goods: goods.filter((good) =>
          good.label.toLowerCase().includes(searchInput.toLocaleLowerCase())
        ),
        title: "Результаты поиска:",
      });
      setsearchInput("");
    }
  };
  return (
    <View style={[styles.input_container]}>
      <TextInput
        style={[styles.text_input]}
        placeholder="Поиск..."
        value={searchInput}
        underlineColorAndroid={"transparent"}
        onChangeText={(text) => {
          setsearchInput(text);
        }}
      ></TextInput>
      <SmallButton
        title={"Найти"}
        width={"30%"}
        onPress={handleSearchInput}
        active_opacity={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header_container: {
    backgroundColor: Colors.black,
    color: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  input_container: {
    width: "94%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: -30,
    height: "65%",
  },
  text_input: {
    height: "90%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: "80%",
    paddingLeft: 15,
    fontFamily: "appFont",
    fontSize: 18,
  },
});
