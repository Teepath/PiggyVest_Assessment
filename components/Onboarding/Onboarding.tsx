import React,{useState, useEffect} from 'react';
import {Animated, Dimensions, ScrollView, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackNavigationProp, NativeStackScreenProps, } from '@react-navigation/native-stack';
import {Icon, ICON_NAME} from '../index';
import { MARGIN_SIZES } from '../common/typings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';



// import {MODES} from '../../common/typings';
import Spacing from '../Spacing';
import {theme} from '../theme';
import Dot from './components/Dot';
import {slides} from './data';
import {
  Slider,
  ImageBox,
  DotsBox,
  ContentBox,
  ContentTitle,
  ContentText,
  NavigationBox,
  NavigationText,
  Slide,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { HomeParamLists, RootStackParamList, OnBoardingParamLists, RootParams } from '../../navigation/typing';

const {width, height} = Dimensions.get('window');




type Prop = CompositeNavigationProp<StackNavigationProp<OnBoardingParamLists, "OnBoarding">,
           StackNavigationProp<RootStackParamList>>

const OnBoarding = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [count, SetCount] = useState<number>(0)
  const xOffset = new Animated.Value(0);
  const [showOnBoarding, setShowOnBoarding] = useState(false)
  const scrollRef = React.useRef<ScrollView>(null);
  const navigation = useNavigation<Prop>()
  const color =theme.palette.primary.blue
    
  const dotColor =theme.palette.tertiary.grey;
  const navigationColor = theme.palette.primary.blue;


 

const saveGuest =async()=>{
  await AsyncStorage.setItem('@viewOnboarding', 'true')
 navigation.navigate("HomeTab", {screen:'Home'})
}

 
const setup = async () => {
  try {
 
  const value =await AsyncStorage.getItem('@viewOnboarding');
  console.log(value, 'value')
  if(value !== null){
    setShowOnBoarding(true)
  }
  
  } catch (err) {
    console.log('Error checkOnboarding', err)
  } finally {
   console.log('Done')
  }
};









React.useEffect(() => {
  setup()
},[]);







if(showOnBoarding){
  navigation.navigate("HomeTab", {screen:'Home'})
}


  return (
    <SafeAreaView>
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    >
    <Slider>
      <Animated.ScrollView
        ref={scrollRef}
        horizontal
        snapToInterval={width}
        decelerationRate="fast"
        scrollEventThrottle={1}
        onResponderRelease={()=> setLoading(false)}
        showsHorizontalScrollIndicator={false}
        
        onScroll={({nativeEvent}) =>
          xOffset.setValue(nativeEvent.contentOffset.x)
        }>
        {slides.user.map((screen, index) => {
          const lastScreen = index === slides.user.length - 1;
          return (
            <Slide key={index}>
              <ImageBox>
                <Icon name={screen.image as ICON_NAME} onPress={()=>{setLoading(false)}}/>
              </ImageBox>
              <Spacing  direction="vertical" />
              <DotsBox>
                {slides.user.map((_, i) => (
                  <Dot
                    bgColor={dotColor}
                    key={i}
                    index={i}
                    activeIndex={Animated.divide(xOffset, width)}
                  />
                ))}
              </DotsBox>
              <Spacing size={MARGIN_SIZES.medium} direction="vertical" />
              <ContentBox>
                <ContentTitle color={color}>{screen.title}</ContentTitle>
                {/* <Spacing direction="vertical" /> */}
                <ContentText>{screen.content}</ContentText>
                <Spacing size={MARGIN_SIZES.large} direction="vertical" />

                <View style={styles.BtnWrapper}>
                <TouchableOpacity
                style={styles.btn}
                  onPress={()=> {
                    saveGuest()
                  }}
                ><Text style={{color:'white'}}>Login</Text></TouchableOpacity>
                                <TouchableOpacity
                style={styles.btn2}
                // onPress={async () => {
                //   if (!lastScreen) {
                //     scrollRef.current?.scrollTo({
                //       x: width * (index + 1),
                //       animated: true,
                //     });
                //   } else {
                //     await goToNextScreen();
                //   }}}
                ><Text style={{color:'white'}}>Register</Text></TouchableOpacity>
                </View>
                {/* <Button
                  // type={buttonType}
                  text={'login'}
                  fill
                  onPress={async () => {
                    if (!lastScreen) {
                      scrollRef.current?.scrollTo({
                        x: width * (index + 1),
                        animated: true,
                      });
                    } else {
                      await goToNextScreen();
                    }
                  }}
                /> */}
                <Spacing size={MARGIN_SIZES.medium} direction="vertical" /> 
                {/* <NavigationBox onPress={() => goToNextScreen()}>
                  <NavigationText color={navigationColor}>Skip</NavigationText>
                </NavigationBox> * */}
               
              </ContentBox>
            </Slide>
          );
        })}
      </Animated.ScrollView>
    </Slider>
    </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  BtnWrapper:{
    flexDirection:'row',
    width:width,
    alignItems: 'center',
    justifyContent:'space-around'
  },

  btn:{
    width: width/2.5,
    height: height * 0.06,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    backgroundColor:'#0000ff',
    alignItems:'center',
    justifyContent:'center'
  },
  btn2:{
    width: width/2.5,
    height: height * 0.06,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    backgroundColor:'#333333',
    alignItems:'center',
    justifyContent:'center'
  }
})

export default OnBoarding;






