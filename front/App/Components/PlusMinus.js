import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Plus from "../../assets/active-icons/plus.svg";
import Minus from "../../assets/active-icons/minus.svg";
import { LinearGradient } from "expo-linear-gradient";

export default function PlusMinus({ item, onPressForSub, onPressForAdd }) {
  return (
    <View
      style={{
        width: "100%",
        margin: 5,
        backgroundColor: "transparent",
      }}
    >
      <LinearGradient
        style={{
          height: 34,
          width: "100%",
          borderRadius: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        colors={["#00C2FF4D", "#A065FF4D"]}
        start={[0, 1]}
        end={[1, 0]}
      >
        <TouchableOpacity onPress={() => onPressForSub()}>
          <Minus />
        </TouchableOpacity>

        <Text
          style={{
            fontFamily: "appFont",
            fontSize: 18,
          }}
        >
          {item.price}
        </Text>
        <TouchableOpacity onPress={() => onPressForAdd()}>
          <Plus />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
