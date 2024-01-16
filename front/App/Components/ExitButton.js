import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import Colors from "../../assets/Shared/Colors";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from '@react-native-masked-view/masked-view';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={[Colors.gradient_left, Colors.gradient_right]}
        start={[0, 1]} end={[1, 0]}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default function Button({
  title,
  onPress,
  width,
  height,
  active_opacity,
}) {
  return (
    <View style={[{ width: width || "95%" }, styles.button_gradient]}>
      <LinearGradient
        colors={[Colors.gradient_left, Colors.gradient_right]}
        start={[0, 1]}
        end={[1, 0]}
        style={{
          width: "90%",
          height: height || 45,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={active_opacity || 0.2}
          style={[
            {
              width: "97.5%",
              height: height-5 || 40,
              backgroundColor: Colors.white,
            },
            styles.button_gradient,
          ]}
        >
          <GradientText style={styles.button_text}>{title}</GradientText>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  button_gradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  button_text: {
    fontFamily: "appFont",
    fontSize: 18,
    color: Colors.black,
  },
});
