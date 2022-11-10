import { View, Text, FlatList, Image } from 'react-native'
import React from 'react';
import {MenuListProps}from '../../Redux/type'


type Props ={
    items:MenuListProps
}

const CartList = ({items}:Props) => {

    const renderItem = ({item})=>{
        return(
            <Image source={{uri: item.strMealThumb}} style={{width:40, height:40, borderRadius: 60/ 2, marginBottom:20 }}/>
        )
      
    }

    return (
        <FlatList
         data={items}
         renderItem={renderItem}
         keyExtractor={({item}:any)=> item?.idMeal?.toString()}
         horizontal={true} 
         showsHorizontalScrollIndicator={false}
        />
       )
}

export default CartList