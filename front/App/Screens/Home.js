import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Carousel from '../Components/Home/Carousel'
import GoodList from '../Components/Home/GoodList'


export default function Home() {
  return (
    <ScrollView>
      <Carousel/>
      <GoodList/>
    </ScrollView>
  )
}