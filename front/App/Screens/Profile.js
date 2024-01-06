import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Colors from "../../assets/Shared/Colors";
import SmallButton from "../Components/SmallButton";
import * as ImagePicker from "expo-image-picker";

export default function Profile({userData}) {
  //console.log("from profile", userData["name"])
  const profile_info = {
    name: userData.name,
    burth_date: userData.god,
    tel_number: userData.phone,
    email: userData.email,
    card_number: userData.cardNumber,
    //photo: "../../assets/for-goods/image1.jpg",
  };

  const [image, setImage] = useState(null);

  const uploadImage = async () => {
    try {
      await ImagePicker.requestMediaLibraryPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        profile_info.photo = result.assets[0].uri;
      }
    } catch (error) {
      alert("Ошибка при загрузке картинки: " + error.message);
    }
  };
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(userData.name);
  const [burthDate, setburthDate] = useState(userData.god);
  const [telNumber, settelNumber] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email);
  const [cardNumber, setCardNumber] = useState(userData.cardNumber);

  const changeProfile = () => {
    const userData = {
      name,
      burthDate,
      telNumber,
      email,
      cardNumber,
    };
    console.log("User Data:", userData);
  };

  const toggleEdit = () => {
    setEditable(!editable);
    if (editable) {
      changeProfile();
    }
  };

  return (
    <KeyboardAvoidingView behavior="height">
      <View style={styles.container}>
        <View style={styles.profile_container}>
          <View style={styles.image_with_items}>
            <View style={styles.image_container}>
              {profile_info.photo ? (
                <Image
                  source={{ uri: profile_info.photo }}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 99,
                    backgroundColor: Colors.dark_gray,
                  }}
                />
              ) : (
                <TouchableOpacity
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 99,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onPress={() => uploadImage()}
                >
                  <Text
                    style={{
                      fontFamily: "appFontBold",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    Загрузите изображение
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.items_near_image}>
              <TextInput
                placeholder={"Имя"}
                inputMode={"text"}
                defaultValue={profile_info.name}
                style={styles.item_profile_near_image}
                editable={editable ? true : false}
                placeholderStyle={{ color: "black" }}
                onChangeText={(text) => setName(text)}
              ></TextInput>
              <TextInput
                defaultValue={profile_info.burth_date}
                placeholder={"Дата рождения"}
                inputMode={"numeric"}
                editable={editable ? true : false}
                style={styles.item_profile_near_image}
                onChangeText={(text) => setburthDate(text)}
              ></TextInput>
              <TextInput
                defaultValue={profile_info.tel_number}
                placeholder={"Номер телефона"}
                inputMode={"tel"}
                editable={editable ? true : false}
                style={styles.item_profile_near_image}
                onChangeText={(text) => settelNumber(text)}
              ></TextInput>
            </View>
          </View>
          <View style={styles.under_image_container}>
            <TextInput
              defaultValue={profile_info.email}
              placeholder={"Почта"}
              inputMode={"email"}
              editable={editable ? true : false}
              style={styles.item_profile}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <TextInput
              defaultValue={profile_info.card_number}
              placeholder={"Номер карты"}
              inputMode={"numeric"}
              editable={editable ? true : false}
              style={styles.item_profile}
              focus={() => console.log("popo")}
              onChangeText={(text) => setCardNumber(text)}
            ></TextInput>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              position: "absolute",
              top: "98%",
            }}
          >
            <SmallButton
              onPress={() => {
                toggleEdit();
              }}
              title={editable ? "Сохранить" : "Изменить профиль"}
              width="66%"
            />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    height: "100%",
  },
  profile_container: {
    height: "70%",
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    alignItems: "center",
    padding: 25,
    paddingBottom: 35,
  },
  image_with_items: {
    height: 180,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 10,
  },
  image_container: {
    height: 150,
    width: 150,
    backgroundColor: Colors.gray,
    borderRadius: 999,
  },
  items_near_image: {
    height: "80%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  item_profile_near_image: {
    height: 35,
    backgroundColor: Colors.gray,
    width: "100%",
    borderRadius: 20,
    padding: 8,
    paddingLeft: 15,
  },
  under_image_container: {
    height: "40%",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
  },
  item_profile: {
    width: "100%",
    height: 35,
    backgroundColor: Colors.gray,
    borderRadius: 20,
    padding: 8,
    paddingLeft: 15,
  },
});
