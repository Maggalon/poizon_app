import { View, Text } from 'react-native'
import React from 'react'
import GoodList from '../Components/Home/GoodList'
import { useRoute } from '@react-navigation/native';

export default function ScreenForGoods() {
  const param = useRoute().params;
  goods = param?.goods
  return (
    <View >
      <GoodList goodsList={goods} title={param?.title}/>
    </View>
  )
}