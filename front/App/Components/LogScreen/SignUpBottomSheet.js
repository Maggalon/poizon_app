import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import SmallButton from "../SmallButton";
import Colors from "../../../assets/Shared/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function SignUpBottomSheet({
  bottomSheetSignUp,
  index,
  snapPoints,
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [god, setGod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user_data', jsonValue);
    } catch (e) {
      // saving error
      console.log(e)
    }
  };

  const handleSignUp = async () => {
    if (
      name &&
      phone &&
      email &&
      god &&
      cardNumber &&
      password &&
      confirmPassword
    ) {
      // Create a dictionary with the input data
      const userData = {
        name,
        phone,
        email,
        password,
        confirmPassword,
        cardNumber,
        god,
      };

      // Do something with the data, e.g., make a POST request
      console.log("User Data:", userData);
      
      try {
        await axios.post("http://192.168.1.45:1000/api/user/registration", userData).then(res => {
          console.log(res.data.message)
          if (res.data.message == "такое мыло уже есть") {
            console.warn("Аккаунт с такой почтой уже зарегистрирован");
          }
          else {
            // Clear the input fields after printing to the console
            storeData(userData)
            setName("");
            setPhone("");
            setEmail("");
            setGod("");
            setCardNumber("");
            setPassword("");
            setConfirmPassword("");
          }
        }).catch((e) => console.log(e.message))
      }
      catch (e) {
        console.log(e.response.data);
      }
      
    } else {
      console.warn("Please fill in all fields");
    }
  };

  return (
    <BottomSheetModal
      ref={bottomSheetSignUp}
      index={index}
      snapPoints={snapPoints}
    >
      <View style={styles.bottom_sheet}>
        <Text style={styles.bottom_sheet_title}>Регистрация</Text>
        <TextInput
          placeholder="Имя"
          style={styles.text_input}
          value={name}
          onChangeText={(text) => setName(text)}
        ></TextInput>
        <TextInput
          placeholder="Телефон"
          style={styles.text_input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        ></TextInput>
        <TextInput
          placeholder="Почта"
          style={styles.text_input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          placeholder="Дата рождения ДД.ММ.ГГГГ"
          style={styles.text_input}
          value={god}
          onChangeText={(text) => setGod(text)}
        ></TextInput>
        <TextInput
          placeholder="Номер карты"
          style={styles.text_input}
          value={cardNumber}
          onChangeText={(text) => setCardNumber(text)}
        ></TextInput>
        <TextInput 
        placeholder="Пароль" 
        style={styles.text_input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TextInput
          placeholder="Повторите пароль"
          style={styles.text_input}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        ></TextInput>
        <SmallButton title={"Зарегистрироваться"} onPress={handleSignUp}/>
      </View>
    </BottomSheetModal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#000000",
    alignItems: "center",
  },
  button_gradient: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },
  button: {
    width: "95%",
  },
  button_text: {
    fontFamily: "appFont",
    fontSize: 18,
    color: Colors.white,
  },
  bottom_sheet: {
    alignItems: "center",
    padding: 10,
  },
  bottom_sheet_title: {
    fontFamily: "appFontBold",
    fontSize: 36,
  },
  text_input: {
    height: 50,
    width: "90%",
    backgroundColor: Colors.gray,
    borderRadius: 20,
    padding: 15,
    fontFamily: "appFont",
    fontSize: 18,
    marginTop: 20,
  },
});
