import { View, Text } from 'react-native'
import React from 'react'
import { Link, useSearchParams } from 'expo-router'

const username = () => {
const {username} = useSearchParams();
  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text>username {username}</Text>
      <Link href='/'>Go Back</Link>
   </View>
  )
}

export default username