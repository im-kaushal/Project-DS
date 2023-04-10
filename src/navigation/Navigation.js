import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from '../screen/onboarding/display/LandingPage';
import Splash from '../screen/onboarding/display/SplashScreen';
import TabNavigator from './Tabs';
import LoginScreen from '../screen/onboarding/login/index.js';
import SignUpScreen from '../screen/onboarding/signup';
import ProductDetails from '../screen/product/productDetails';
import ProductPage from '../screen/product/items';
import WishlistScreen from '../screen/wishlist';
import ForgetPasswordScreen from '../screen/onboarding/auth/forgotPassword';
import CartScreen from '../screen/cart';
import About from '../screen/profile';
import OtpScreen from '../screen/onboarding/auth/OTP';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerTitle: '',
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={screenOptions}
        />
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={screenOptions}
        />

        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Product"
          component={ProductPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={screenOptions}
        />
        <Stack.Screen
          name="Profile"
          component={About}
          options={screenOptions}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="WishlistScreen"
          component={WishlistScreen}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
