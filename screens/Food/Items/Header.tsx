import { View, Text } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
  return (
    <View style={{flexDirection:'row', marginTop:30, justifyContent:'space-between', margin:10}}>
      <Icon name="chevron-thin-left" size={25} color="#fff" onPress={()=>navigation.goBack()}/>
      <Icon name="heart-outlined" size={25} color="#fff"/>
      
    </View>
  )
}

export default Header