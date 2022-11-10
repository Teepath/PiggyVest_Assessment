import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnBoardingParamLists, ROOT_ROUTES} from './typing';
//components
import  Boarding from '../components/Onboarding/Onboarding';




const Stack = createNativeStackNavigator<OnBoardingParamLists>();

const OnBoarding = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen
        name={ROOT_ROUTES.ONBOARDING}
        component={Boarding}
      />
     
    </Stack.Navigator>
  );
};

export default OnBoarding;
