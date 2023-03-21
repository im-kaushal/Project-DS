import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import store from '../redux/Store';

import LandingPage from '../screen/onboarding/LandingPage';

import Splash from '../screen/onboarding/SplashScreen';
import Home from '../screen/Home';
import TabNavigator from './BottomTab';
import LoginScreen from '../screen/onboarding/Login';
import SignUpScreen from '../screen/onboarding/SignUpPage';
import DrawerNavigator from './DrawerNavigator';

import WishlistScreen from '../screen/Wishlist';
import CartScreen from '../screen/CartScreen';
import ProductPage from '../screen/Product';
import About from '../screen/Profile';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />

          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="Product" component={ProductPage} />
          <Stack.Screen name="Profile" component={About} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
