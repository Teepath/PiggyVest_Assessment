import { View, Text, FlatList } from 'react-native'
import React from 'react';
import PopularItem from './PopularItem';
import { useNavigation } from '@react-navigation/native';
import { HomeParamLists } from '../navigation/typing';
import { StackNavigationProp} from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import {MenuListProps} from "../Redux/type"
import {handleCart} from "../Redux/action"

type Props={
menu:MenuListProps
}

const MenuList:React.FC<MenuListProps> = ({menu}) => {
  const dispatch:any =useDispatch()
  const navigation = useNavigation<StackNavigationProp<HomeParamLists >>()
    const renderItem = ({item}:any)=>{
        return <PopularItem key={item.idMeal} item={item} onPress={()=>{
          dispatch(handleCart(item))
          navigation.push('Food', {
          item
      })}}/>
    }
  return (
   <FlatList
    data={menu}
    renderItem={renderItem}
    keyExtractor={({item}:any)=> item?.idMeal?.toString()}
    horizontal={true} 
    showsHorizontalScrollIndicator={false}
   />
  )
}

export default MenuList