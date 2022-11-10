import { View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import { foodItemProps } from '../Redux/type';
import { ActionProps } from '../Redux/Reducers/reducer';
import { SelectedProps } from '../Redux/Reducers/SelectFood';

import BaseTextInput from '../components/Input/BaseTextInput';
import Icon from "react-native-vector-icons/Entypo";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getItemCastegories, selectedFood, handleMenuCategory } from '../Redux/action';
import { MenuActionProps } from '../Redux/Reducers/Menu';
import {CartActionProps} from "../Redux/Reducers/Cart"
import CartList from './Food/CartList';
import { useNavigation } from '@react-navigation/native';


//components
import FoodTag from './foodTag';
import Spacing from '../components/Spacing';
import { MARGIN_SIZES } from '../components/common/typings';
import PopularItem from './PopularItem';
import FoodList from './FoodList';
import MenuList from './MenuList';

// import Header from './WelcomeHead'

const Wrapper = styled.View``;

const {width, height} = Dimensions.get('window')

const Home = () => {
  const foodItem:any=useSelector((state:ActionProps)=> state.items.items)
  const foodSelected:any = useSelector((state:SelectedProps)=>state.selected.item)
  const Cart:any =useSelector((state:CartActionProps)=> state.carts.carts);
  const menu:any = useSelector((state:MenuActionProps)=>state.menu.menu)
  const [bgColor, setBgColor] = useState<boolean>(false)
  const [meal, setMeal] =useState<string>('')
const dispatch:any = useDispatch()
const navigation =useNavigation()


const updateDate =(id:any)=>{
dispatch(selectedFood(id))
}


useEffect(()=>{
  // const subScribe = navigation.addListener('focus', ()=>{
    dispatch(handleMenuCategory('Chicken'))
    dispatch(getItemCastegories())
  // })

  // return subScribe;


},[])

useEffect(()=>{
  if(foodSelected){
    dispatch(handleMenuCategory(foodSelected.strCategory))
  }
  
  

},[foodSelected.strCategory])



console.log(foodSelected.strCategory, 'foodSelected')
console.log(Cart, 'cart')
  return (
    <KeyboardAwareScrollView>
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.left}>
          <View><Text>Hi Babatunde Adebanjo</Text></View>
          <View style={{flexDirection:'row'}}><Text style={{color:'black', fontSize:24, fontWeight:'600'}}>Hungry Now?</Text><Image source={require('../assets/images/fire2.png')} style={{width:30, height:30}}/></View>
        </View>
        <View style={styles.right}><Image source={require('../assets/images/profile.jpeg')} style={{width: 50, height: 50, borderRadius: 60/ 2}}/></View>
      </View>
    <View style={styles.searchArea}>
      <View style={styles.count}><Text style={{color:'white', fontSize:12}}>{Cart?.length}</Text></View>
      <BaseTextInput placeholder='search' leftIcon={()=> <Icon name="magnifying-glass" size={20}/>} rightIcon={()=> <Icon name="swap" style={{width:30, height:30}}/>}/>
    </View>
    <Spacing direction='vertical' size={MARGIN_SIZES.medium}/>
      <FoodList items={foodItem} bgColor={bgColor} onPress={updateDate}/>
     
      <Spacing direction='vertical' size={MARGIN_SIZES.medium}/>
    <View style={styles.menu}>
    <View style={styles.title}><Text style={styles.titleText}>Popular Item</Text></View>
    <View><Text style={styles.titleTexttwo}>See All</Text></View>
    </View>
    <Spacing direction='vertical' size={MARGIN_SIZES.small}/>
   {/* <PopularItem/> */}
   <MenuList menu={menu}/>
   <Spacing direction='vertical' size={MARGIN_SIZES.medium}/>
   <TouchableOpacity style={styles.cartCard}>
   <View style={styles.shape}></View>
    <View style={styles.cartItemCount}><Text style={{color:'white', fontSize:18}}>Cart</Text><Text style={{color:'white'}}>{Cart?.length} items</Text>
    </View>
    <View style={styles.cardImage}>
    {/* <Image source={require('../assets/images/menu3.jpeg')} style={{width:40, height:40, borderRadius: 60/ 2, marginBottom:20 }}/> */}
    <CartList items={Cart}/>
    </View>
    </TouchableOpacity>
   
    
    </View>
    </KeyboardAwareScrollView>
  )
}


const styles= StyleSheet.create({
 wrapper:{
  flex:1,
  padding:10,
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10,
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
  backgroundColor:'white'
 },
 header:{
  flexDirection: 'row',
  width:width-20,
  height: height * 0.2-35,
  justifyContent: 'space-between',
  alignItems: 'center'

 },

 left:{
  flexDirection:'column',
  width: width/1.5,

  justifyContent:'flex-start',
  alignItems:'flex-start'
 },
 right:{
  width: width * 0.2,
  alignItems:'flex-end'
 },
 searchArea:{
  justifyContent:'flex-start',
  alignItems:'flex-start'
 },
 title:{
  width:width * 0.6,
 },
 titleText:{
  fontSize:25,
  color:'black',
  fontWeight:'800'
 },
 titleTexttwo:{
  fontSize:20,
  color:'grey',
 },
 menu:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
width:width-20,
 },
 cartCard:{
  width:width-20,
  backgroundColor:'#b4d3b2',
  minHeight:height*0.1,
  height:'auto',
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  padding:10,
  paddingTop:30,
  borderBottomStartRadius:20,
  borderBottomEndRadius:20,
  borderTopRightRadius:20,
  borderTopStartRadius:20
 },

 shape:{
  backgroundColor:'#fff',
  position:'absolute',
  borderLeftColor: "transparent",
  borderRightColor: "transparent",
  borderEndColor:'transparent',
  borderStartColor:'transparent',
  borderTopRightColor:'transparent',
  borderBottomEndRadius:70,
  borderBottomLeftRadius:70,
  borderTopRightRadius:0,
  width:80,
  height:20,
  top:0.1,
  bottom:0,
  left:150,
  right:0,
  zIndex:2
 },

 cartItemCount:{
  width:100
 },

 count:{
  width:15,
  height:15,
  backgroundColor:'#b4d3b2',
  borderRadius: 60/2,
  position:'absolute',
  alignItems:'center',
  justifyContent:'center',
  top:10,
  zIndex:2,
  left:340,
  bottom:0,
  right:0

 },
 cardImage:{
  
 }
})

export default Home