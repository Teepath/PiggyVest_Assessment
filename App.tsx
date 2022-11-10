import React from 'react';
// import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components';
import {theme} from './components/theme';
import Navigation from './navigation/index';
// import AuthNavigation from './navigation/AuthNavigation';
import OnBoarding from "./components/Onboarding/Onboarding"
// import OnBoarding from './navigation/onBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {STORAGE_KEYS} from './constants';
import { Provider } from 'react-redux';
import {store} from './Redux/store';

// export const AppContext = React.createContext<{
//   showOnBoarding: boolean | undefined;
// }>({
//   showOnBoarding: false,
// });

const App = () => {
  const [showOnBoarding, setShowOnBoarding] = React.useState<
    boolean | undefined
  >(false);

  /**
   * Initial steps before app launch
   * 1. check if user is a visitor
   */
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
  }, [showOnBoarding]);

  const showOnBoardingNotUndefined = showOnBoarding !== undefined;
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
  {/* <NavigationContainer> */}
  <Navigation/> 
  {/* </NavigationContainer> */}
    </ThemeProvider>
    </Provider>
  );
};

export default App;
