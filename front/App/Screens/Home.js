import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Carousel from '../Components/Home/Carousel'
import GoodList from '../Components/Home/GoodList'
import axios from 'axios'

export default function Home() {

  const [allGoods, setAllGoods] = useState([])

  useEffect(() => {
    const getGoods = async () => {
      try {
        await axios.get("http://192.168.1.45:1000/api/all-products").then(res => {
          //console.log(res.data[0]);
          
          setAllGoods(res.data.map(item => {
            //console.log(item.description);
            return {
              id: item.id,
              image: `http://192.168.1.45:1000/${item.file.replace("uploads\\", "")}`, // require(`../../../server/${item.file.replace("\\", "/")}`)
              label: item.name,
              rate: item.rating,
              price: "1306₽",
              description: item.description
            }
          }))
        }).catch((e) => console.log(e.message))
      }
      catch (e) {
        console.log(e);
      }
    }
    getGoods()
  }, [])

  // const allGoods = [
  //   {
  //     id: "01",
  //     image: require("../../assets/for-goods/image1.jpg"),
  //     label: "Кофта сиреневая",
  //     rate: "4.9",
  //     price: "1306₽",
  //   },
  //   {
  //     id: "02",
  //     image: require("../../assets/for-goods/image2.jpg"),
  //     label: "Белое пальто",
  //     rate: "4.59",
  //     price: "1468₽",
  //   },
  //   {
  //     id: "03",
  //     image: require("../../assets/for-goods/image3.jpg"),
  //     label: "Желтая куртка",
  //     rate: "4.47",
  //     price: "56827₽",
  //   },
  //   {
  //     id: "04",
  //     image: require("../../assets/for-goods/image4.jpeg"),
  //     label: "Бежевое пальто",
  //     rate: "3.02",
  //     price: "4893₽",
  //   },
  //   {
  //     id: "05",
  //     image: require("../../assets/for-goods/image5.jpeg"),
  //     label: "Брючный костюм",
  //     rate: "4.20",
  //     price: "86549₽",
  //   },
  //   {
  //     id: "06",
  //     image: require("../../assets/for-goods/image6.jpeg"),
  //     label: "Голубая кофта",
  //     rate: "4.19",
  //     price: "15₽",
  //   },
  // ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Carousel/>
      <GoodList goodsList={allGoods}/>
    </ScrollView>
  )
}