import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import "react-native-gesture-handler";
import Colors from "../../assets/Shared/Colors";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import Button from "../Components/Button";
import SmallButton from "../Components/SmallButton";
import { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import LoginBottomSheet from "../Components/LogScreen/LoginBottomSheet";
import SignUpBottomSheet from "../Components/LogScreen/SignUpBottomSheet";

export default function Login({setUserData}) {
  const bottomSheetLogin = useRef(null);
  const bottomSheetSignUp = useRef(null);

  const snapPoints = ["37%", "75%"];
  function handleLoginModal() {
    bottomSheetLogin.current?.present();
  }
  function handleSignupModal() {
    bottomSheetSignUp.current?.present();
  }
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <View
            style={{
              height: "30%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/splash-image.png")}
              style={{ width: 323, height: 110 }}
            />
          </View>

          <View style={styles.bottom}>
            <Button title={"Войти"} handlePresentModal={handleLoginModal} />
            <LoginBottomSheet
              bottomSheetLogin={bottomSheetLogin}
              index={0}
              snapPoints={snapPoints}
              setUserData={setUserData}
            />

            <Button
              title={"Зарегистрироваться"}
              handlePresentModal={handleSignupModal}
            />
            <SignUpBottomSheet
              bottomSheetSignUp={bottomSheetSignUp}
              index={1}
              snapPoints={snapPoints}
              setUserData={setUserData}
            />
          </View>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#000000",
    alignItems: "center",
  },
  bottom: {
    backgroundColor: Colors.white,
    padding: 35,
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: 420,
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
