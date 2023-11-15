import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

export default function Good() {
  const param = useRoute().params;
  return (
    <View>
      <Text>Good</Text>
      <Text>{param?.goodName}</Text>
    </View>
  )
}