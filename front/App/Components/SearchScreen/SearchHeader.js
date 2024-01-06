import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "../../../assets/Shared/Colors";
import { TextInput } from "react-native";
import SmallButton from "../SmallButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Header() {
  const navigation = useNavigation();
  const [searchInput, setsearchInput] = useState("");
  const handleSearchInput = () => {
    
    if (searchInput) {
      console.log("search is: " + searchInput);
      setsearchInput("");
      navigation.navigate("ResultsSearchScreen", {title: 'Результаты поиска:'})
    }
  };
  return (
    <View style={styles.header_container}>
      <View style={styles.input_container}>
        <TextInput
          style={styles.text_input}
          placeholder="Поиск..."
          value={searchInput}
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => {setsearchInput(text)}}
        ></TextInput>
        <SmallButton
          title={"Найти"}
          width={"25%"}
          onPress={handleSearchInput}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header_container: {
    backgroundColor: Colors.black,
    color: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 90,
  },
  input_container: {
    width: "96%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: -26,
    height: "49.5%",
  },
  text_input:{
    height: "100%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    width: "77%",
    paddingLeft: 15,
    fontFamily: "appFont",
    fontSize: 18,
  }
});
