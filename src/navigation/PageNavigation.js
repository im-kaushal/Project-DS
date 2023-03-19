import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import store from '../redux/Store';

import LandingPage from '../screen/LandingPage';

import Splash from '../screen/SplashScreen';
import Home from '../screen/Home';
import TabNavigator from './BottomTab';
import LoginScreen from '../screen/Login';
import SignUpScreen from '../screen/SignUpPage';

import WishlistScreen from '../screen/Wishlist';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
