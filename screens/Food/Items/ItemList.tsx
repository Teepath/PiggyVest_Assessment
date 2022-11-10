import { View, Text, FlatList } from 'react-native'
import React from 'react'
import FoodItem from './FoodItem'

const ItemList = () => {
    const renderItem = ({item}:any)=>{
        return(
          <FoodItem key={item} onPress={()=>console.log('press')}/>
        )
      }
  return (
    <FlatList
      data={[1,2,3]}
      renderItem={renderItem} 
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
     keyExtractor={({item}:any)=> item?.toString()}
  
      />
  )
}

export default ItemList