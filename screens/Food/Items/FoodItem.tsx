import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
import { theme } from '../../../components/theme';

const {width, height} = Dimensions.get('window');

const Wrapper = styled.TouchableOpacity<{color?:string}>`
width:${width * 0.2}px;
height: ${height *0.1+40}px;
justify-content: space-around;
align-items:center;
margin-right:8px;
border-radius:13px;
border: 1px solid ${({color}:any)=>color?color:'grey'}
`;


const Circle = styled.View<{color?:string, size?:number}>`
width:30px;
height:30px;
border-radius:50px;
border: ${({size}:any)=> size?`${size}px`:'1px'} solid ${({color}:any)=>color?color:'grey'}
`;

const TitleView = styled.View`

`;
const TitleText = styled.Text`
font-size: 14px;
color: ${theme.palette.tertiary.grey}
font-family:${theme.fontTypes.body}
`;

const PriceView = styled.View``;

const PriceText = styled.Text`
font-size:16px;
font-weight:bold,
`;

type Props = {
    onPress: ()=> void,
    color?:string,
    size?:number
}

const FoodItem = ({color, size, onPress}:Props) => {
  return (
    <Wrapper onPress={onPress} color={color}>
        <Circle color={color} size={size}/>
        <TitleView><TitleText>FoodItem</TitleText></TitleView>
        <PriceView><PriceText>$12.99</PriceText></PriceView>
      
    </Wrapper>
  )
}

export default FoodItem