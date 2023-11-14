import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import SmallButton from "../SmallButton";
import Colors from "../../../assets/Shared/Colors";

export default function LoginBottomSheet({
  bottomSheetLogin,
  index,
  snapPoints,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      // Do something with the data, e.g., make a POST request
      console.log("Username:" + username + "\nPassword:" + password);
      // Clear the input fields after logging
      setUsername("");
      setPassword("");
    }
  };
  return (
    <BottomSheetModal
      ref={bottomSheetLogin}
      index={index}
      snapPoints={snapPoints}
      backgroundStyle={{ borderRadius: 10, padding: 35 }}
    >
      <View style={styles.bottom_sheet}>
        <Text style={styles.bottom_sheet_title}>Вход</Text>
        <TextInput
          placeholder="Имя"
          style={styles.text_input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        ></TextInput>
        <TextInput
          placeholder="Пароль"
          style={styles.text_input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <SmallButton title={"Войти"} width={"95%"} onPress={handleLogin}/>
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
