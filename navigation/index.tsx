import React,{useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';
// import MainTab from './BottomTabNavigation';
import OnBoarding from '../components/Onboarding/Onboarding';

import {RootStackParamList, ROOT_ROUTES} from './typing';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
    const[checkOnBoarding, setOnBoarding] =useState<boolean>(false)

    const checkBoarding = async()=>{
      try{
        const value = await AsyncStorage.getItem('@viewOnboarding');
        console.log(value, 'value2')
        if(value !== null){
          setOnBoarding(true)
        }
      }catch(err){
        console.log(err, 'catch err')
      }
    
    }
    
    useEffect(()=>{
      checkBoarding()
    },[checkOnBoarding])

console.log(checkOnBoarding)

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          !checkOnBoarding ? 'OnBoarding' : ROOT_ROUTES.HOME_TAB
        }
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROOT_ROUTES.ONBOARDING}>
            {({navigation}) => (
              <OnBoarding
              
                // // mode={MODES.primary}
                // goToNextScreen={() => handleGoToMainStack(navigation)}
              />
            )}
          </Stack.Screen>
        

          <Stack.Group screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={ROOT_ROUTES.HOME_TAB}
            component={AuthNavigation}
          />
        
        </Stack.Group>
          
    
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
