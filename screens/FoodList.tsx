import { View, Text, FlatList, StyleSheet} from 'react-native'
import React from 'react'
import FoodTag from './foodTag'
import {foodListProps, foodProps, listProps} from '../Redux/type'

type Props ={
  items:foodListProps,
  bgColor:boolean,
  onPress:(id:string)=>void
}
const FoodList:React.FC<Props> = ({items, bgColor, onPress}) => {

    const renderItem = ({item}:listProps)=>{
        return(
          <FoodTag  item={item} bgColor={bgColor} onPress={onPress} key={item.idCategory}/>
        )
      }

      const SeparatorComponent:any =()=>{
        <View style={styles.separatorLine}>

        </View>
      }
  return (
    <FlatList
      data={items}
      renderItem={renderItem} 
      initialNumToRender={6}
      maxToRenderPerBatch={6}
      horizontal={true} 
      showsHorizontalScrollIndicator={false}
     keyExtractor={({item}:any)=> item?.idCategory?.toString()}
     ItemSeparatorComponent={SeparatorComponent}
      />
  )
}

const styles = StyleSheet.create({
    separatorLine: {
        height: 5,
        paddingTop: 2,
      }
})

export default FoodList