import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { boxShadowStyles } from './styling';
import Icon from "react-native-vector-icons/Entypo";




const {height, width} = Dimensions.get('window')

type Props={
    onPress:()=>void;
    item:any
}
const PopularItem = ({onPress, item}:Props) => {
  
  return (
    <TouchableOpacity style={[boxShadowStyles, styles.box]} onPress={onPress} >
        <View style={styles.itemTitle}>
        <Text style={styles.itemText}>{item.strMeal}</Text>
        <Text style={styles.itemText}>$9.99</Text>
        </View>
     <Image source={{uri:item.strMealThumb}} style={{width: 100, height: 100, borderRadius: 100/ 2}}/>
     <View style={styles.bottom}>
    <View style={styles.bottomContent}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../assets/images/fire2.png')} style={{width:30, height:30}}/>
    <Text>44 Calories</Text>
        </View>
   <View style={{flexDirection:'row', alignItems:'center'}}>
   <Icon name="chevron-with-circle-left" style={{width:30, height:30, marginTop:20, marginLeft:10}}/>
    <Text>20 mins</Text>
   </View>
    </View>
    <View>
    <Icon name="tablet" style={{width:30, height:30}} />
    </View>
     </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    box:{
        width:width *0.6,
        height: height *0.4,
        backgroundColor:'#fafafa',
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        margin:10,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        alignItems:'center',
        justifyContent:'space-around'
    },

    itemTitle:{
        justifyContent:'space-around',
        alignItems:'center'

    },
    itemText:{
        fontSize:16,
        color:'black',
        fontWeight:'800'
    },
    bottom:{
       
        width:width *0.6,
        height:height *0.1 +10,
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        justifyContent:'space-between'
    },
    bottomContent:{
        padding:10,
        justifyContent:'space-between',
      
    }
})


export default PopularItem