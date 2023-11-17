import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Colors from "../../assets/Shared/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function Button({ title, handlePresentModal }) {
  return (
    <View style={{width: '90%'}}>
      <TouchableOpacity onPress={handlePresentModal}>
        <LinearGradient
          style={styles.button_gradient}
          colors={[Colors.gradient_left, Colors.gradient_right]}
          start={[0, 1]} end={[1, 0]}
        >
          <Text style={styles.button_text}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button_gradient: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 10,
  },
  button_text: {
    fontFamily: "appFont",
    fontSize: 18,
    color: Colors.white,
  },
});
