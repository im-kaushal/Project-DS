import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import store from '../store/Store';

import LandingPage from '../screen/LandingPage';
import SignUpPage from '../screen/SignUpPage';
import Splash from '../screen/SplashScreen';
import Home from '../screen/Home';
import TabNavigator from './BottomTab';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="SignUp" component={SignUpPage} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
