import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '../Tabs';

import {AuthStack, ProductStack, ProfileStack} from './Navigation';

import Splash from '../../screens/onboarding/display/SplashScreen';
import LandingPage from '../../screens/onboarding/display/LandingPage';
import SignUpScreen from '../../screens/onboarding/SignUp';
import LoginScreen from '../../screens/onboarding/LogIn';
import ForgotPassword from '../../screens/onboarding/auth/ForgotPassword';
import OTPScreen from '../../screens/onboarding/auth/OTP';
import ProductDetails from '../../screens/Product/ProductDetails';
import Product from '../../screens/Product/ShowProducts';
import CartScreen from '../../screens/Cart';
import Profile from '../../screens/Profile';
import ContactUs from '../../screens/Contact';
import WishlistScreen from '../../screens/Wishlist';
import DrawerNavigator from '../Drawer';

const Stack = createStackNavigator();
const screenOptions = {
  headerTitle: '',
  headerShown: false,
};
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Drawer should be prioritised */}
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={screenOptions}
        />
        {/* --------------Importing Stack --------------- */}

        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={screenOptions}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={screenOptions}
        />
        <Stack.Screen
          name="ProductStack"
          component={ProductStack}
          options={screenOptions}
        />
        <Stack.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={screenOptions}
        />
        {/* ------------Importing Indivisual Screens----------- */}
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
          name="ForgotPassword"
          component={ForgotPassword}
          options={screenOptions}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OTPScreen}
          options={screenOptions}
        />

        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={screenOptions}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={screenOptions}
        />

        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={screenOptions}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
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

export default Main;
