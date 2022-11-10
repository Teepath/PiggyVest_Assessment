import { View, Text, StyleSheet, Dimensions, TouchableOpacity,Image } from 'react-native'
import React from 'react';
import { boxShadowStyles } from './styling';
import {foodProps} from '../Redux/type'
import { SelectedProps } from '../Redux/Reducers/SelectFood';
import { useDispatch, useSelector } from 'react-redux';




type Props={
  item:foodProps
  bgColor?:boolean,
  onPress:(str:string)=>void;
}

const {width, height} = Dimensions.get('window');
const foodTag = ({item, bgColor, onPress}:Props) => {
  const dispatch:any = useDispatch()
  const foodSelected:any = useSelector((state:SelectedProps)=>state.selected.item)


  return (
    <TouchableOpacity  onPress={()=>onPress(item.idCategory)} style={[boxShadowStyles, styles.box, {backgroundColor:item.selected?'#b4d3b2':'white'}]}>
        
        <View style={{alignItems:'center', justifyContent:'center'}}>
        <Image source={{uri:item.strCategoryThumb}} style={{width:60, height:60, borderRadius: 60/ 2, marginBottom:20 }}/>

        <Text style={{fontSize:18, color:'black',}}>{item.strCategory}</Text>
        </View>
     
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    box:{
        
        width:width *0.3,
        height: height *0.2,
        borderBottomRightRadius:20,
        margin:10,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default foodTag