import { View, Text } from 'react-native'
import React from 'react'
import { Link, useSearchParams } from 'expo-router'

const profile = () => {
const {name,age} = useSearchParams();
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text>profile {name} {age}</Text>
      <Link href='/'>Go Back</Link>
   </View>
  )
}

export default profile