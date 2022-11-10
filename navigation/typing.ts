import { NavigatorScreenParams } from '@react-navigation/native';
import { OnBoarding } from '../components';

/** Root Routes */

export enum ROOT_ROUTES {
  ONBOARDING = 'OnBoarding',
  AUTHENTICATION = 'Authentication',
  HOME_TAB = 'HomeTab',
 
}

export type OrderDetailsParams ={
Home:undefined

}


export type RootParams = {
  ONBOARDING:{screen:string},
  HOME_TAB:{screen:string}

}



export  type OnBoardingParamLists ={
  OnBoarding:undefined
}



export enum HomeRoute{
  Home='Home',
  Food='Food',

}


export type HomeParamLists ={
Home:undefined
Food:undefined
}


/** Authentication route param list  */


interface OnBoardingParams extends OnBoardingParamLists{}
interface HomeParams extends HomeParamLists{};


/** Root route param list  */
export type RootStackParamList = {
  OnBoarding: NavigatorScreenParams<OnBoardingParams>
  HomeTab:NavigatorScreenParams<HomeParams>
};


declare global {
  namespace ReactNavigation {
    interface ROOT_ROUTES extends RootStackParamList{}
  }
}


