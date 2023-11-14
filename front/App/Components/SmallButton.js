import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Colors from "../../assets/Shared/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function Button({ title, onPress, width }) {
  return (
    <View style={{width: width || '95%',}}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          style={styles.button_gradient}
          colors={[Colors.gradient_left, Colors.gradient_right]}
        >
          <Text style={styles.button_text}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button_gradient: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    margin: 10,
  },
  button_text: {
    fontFamily: "appFont",
    fontSize: 18,
    color: Colors.white,
  },
});
