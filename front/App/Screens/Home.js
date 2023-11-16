import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Carousel from '../Components/Home/Carousel'
import GoodList from '../Components/Home/GoodList'


export default function Home() {
  const allGoods = [
    {
      id: "01",
      image: require("../../assets/for-goods/image1.jpg"),
      label: "Кофта сиреневая",
      rate: "4.9",
      price: "1306₽",
    },
    {
      id: "02",
      image: require("../../assets/for-goods/image2.jpg"),
      label: "Белое пальто",
      rate: "4.59",
      price: "1468₽",
    },
    {
      id: "03",
      image: require("../../assets/for-goods/image3.jpg"),
      label: "Желтая куртка",
      rate: "4.47",
      price: "56827₽",
    },
    {
      id: "04",
      image: require("../../assets/for-goods/image4.jpeg"),
      label: "Бежевое пальто",
      rate: "3.02",
      price: "4893₽",
    },
    {
      id: "05",
      image: require("../../assets/for-goods/image5.jpeg"),
      label: "Брючный костюм",
      rate: "4.20",
      price: "86549₽",
    },
    {
      id: "06",
      image: require("../../assets/for-goods/image6.jpeg"),
      label: "Голубая кофта",
      rate: "4.19",
      price: "15₽",
    },
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Carousel/>
      <GoodList goodsList={allGoods}/>
    </ScrollView>
  )
}