import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, KeyboardAvoidingViewBase } from 'react-native'
import React,{useState} from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from "react-native-vector-icons/Entypo";
import FoodItem from './Items/FoodItem';
import styled from 'styled-components/native';
import Spacing from '../../components/Spacing';
import { NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native'
import FoodItemList from './Items/ItemList';
import { MARGIN_SIZES } from '../../components/common/typings';
import Header from './Items/Header';
import { HomeParamLists } from '../../navigation/typing';
import { useSelector } from 'react-redux';
import { SelectedProps } from '../Redux/Reducers/SelectFood';



const {width, height} = Dimensions.get('window')


const Button =styled.TouchableOpacity`
width:20px;
height:20px;
border-radius:4;
border: 1px solid grey;
align-items:center;
justify-content:center;
`;
type Props ={
route:NativeStackScreenProps<HomeParamLists, "Food">
}
const Food = ({route}:Props) => {
    const item =route?.params;
    const [count, setCount] = useState<number>(1)
    const foodSelected:any = useSelector((state:SelectedProps)=>state.selected.item)

    console.log(item, 'single')
  return (
    <View style={styles.Wrapper}>
        <Header/>
<View style={styles.imageCard}><Image source={{uri:item?.item?.strMealThumb}} style={{width: 150, height: 150, borderRadius: 150/ 2}}/></View>

<View style={styles.bottomCard}>
<KeyboardAwareScrollView>
<View style={{marginTop:60, justifyContent:'center', alignItems:'center'}}><Text style={{color:'black', fontSize: 16, fontWeight:'800'}}>{item?.item?.strMeal}</Text></View>
<View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', width:width-20}}>
    <Image source={{uri:item?.item?.strMealThumb}} style={{width:20, height:40, margin: 20}}/>
    <View><Text>{item?.item?.strMeal}</Text></View>

</View>
<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
    <View style={{flexDirection:'row', width:width* 0.2, justifyContent:'center', alignItems:'center'}}><Icon name="chevron-with-circle-left" style={{width:30, height:30, marginTop:20}}/><Text>15 mins</Text></View>
    <View style={{flexDirection:'row', width:width* 0.6, justifyContent:'center', alignItems:'center', marginLeft:10}}><Icon name="star"  fill="yellow" style={{width:30, height:30, marginTop:20}} /><Text>4.8(2.2k review)</Text>
    <Icon name="chevron-right"   style={{width:30, height:30, marginTop:20, marginLeft:20}} />
    </View>
</View>
<View style={{width:width-20, alignItems:'center'}}><FoodItemList/></View>

<Spacing direction='vertical' size={MARGIN_SIZES.medium}/>
<View style={{justifyContent:'center', alignItems:'center'}}><Text style={{color:'black'}}>{foodSelected?.strCategoryDescription}</Text>
</View>
<Spacing direction='vertical' size={MARGIN_SIZES.small}/>
<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
    <View style={{width:250}}><Text style={{color:'black', fontWeight:'800'}}>Total: $12.99</Text></View>
    <View style={styles.count}>
        <TouchableOpacity style={styles.btn} onPress={()=>setCount(()=> count - 1)}><Text>-</Text></TouchableOpacity></View>
        <Text style={{color:'black', fontWeight:'600', fontSize:16}}>1</Text>
        <Button style={styles.btn} onPress={()=>setCount(()=> count + 1)}><Text style={{}}>+</Text></Button>
</View>
<Spacing direction='vertical' size={MARGIN_SIZES.small}/>
<TouchableOpacity style={styles.submit} onPress={()=>console.log('press')}><Text>Next</Text></TouchableOpacity>
</KeyboardAwareScrollView>
</View>


    </View>
  )
}


const styles = StyleSheet.create({
    Wrapper:{
        flex:1,
        backgroundColor:'#b4d3b2',
     
    },
    imageCard:{
        position:'absolute',
        top:50,
        bottom:0,
        left:120,
        right:0,
        zIndex:10
    },

    bottomCard:{
        position:'absolute',
        top:140,
        padding:10,
        minHeight:800,
        height:'auto',
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        backgroundColor:'white',
        bottom:0,
        left:0,
        right:0,
        zIndex:5
    },

    count:{
        flexDirection:'row',
        width:20,
        justifyContent:'space-between',
        alignItems:'center'
    },

    btn:{
        width:20,
        height:20,
        borderRadius:4,
        borderWidth:0.5,
        alignItems:'center',
        justifyContent:'center'
    },

    submit:{
        width:width-20,
        backgroundColor:'#b4d3b2',
        justifyContent:'center',
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        alignItems:'center',
        height:height * 0.07
    }
})

export default Food;