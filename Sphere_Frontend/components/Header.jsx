import { View, Text,stylesheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = () => {
  return (
    <View>
        <Ionicons name="arrow-back-sharp" size={24} color="black" />
      <Text>Header</Text>
    </View>
  )
}

export default Header