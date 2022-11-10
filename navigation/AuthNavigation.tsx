import  React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//components
import Home from '../screens/Home';
import Food from '../screens/Food/Food';
import { OnBoarding } from '../components';
import {HomeParamLists, HomeRoute, ROOT_ROUTES, RootStackParamList} from './typing';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<HomeParamLists>();

const AuthNavigation = () => {
  
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}
    >

       <Stack.Screen
        name='Home'
        component={Home}
      />
       <Stack.Screen
        name='Food'
        component={Food}
      />
     
    </Stack.Navigator>
  );
};

export default AuthNavigation;
