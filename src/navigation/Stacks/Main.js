import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from '../Tabs';
import DrawerNavigator from '../Drawer';

import LandingPage from '../../screens/onboarding/display/LandingPage';
import Splash from '../../screens/onboarding/display/SplashScreen';
import LoginScreen from '../../screens/onboarding/LogIn';
import SignUpScreen from '../../screens/onboarding/SignUp';
import ForgotPassword from '../../screens/onboarding/auth/ForgotPassword';
import OTPScreen from '../../screens/onboarding/auth/OTP';
import ProductPage from '../../screens/Product/ShowProducts';
import ProductDetails from '../../screens/Product/ProductDetails';
import RenderProducts from '../../screens/Product/RenderProducts';
import WishlistScreen from '../../screens/Wishlist';
import CartScreen from '../../screens/Cart';
import About from '../../screens/Profile/EditProfile';
import ResetPassword from '../../screens/onboarding/auth/ResetPassword';

const Stack = createStackNavigator();
const screenOptions = {
  headerTitle: '',
  headerShown: false,
};
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Drawer should be prioritised */}

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
        {/* --------------Importing Screens --------------- */}
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={screenOptions}
        />
        <Stack.Screen
          name="TabNavigator"
          component={Tabs}
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
          name="ResetPassword"
          component={ResetPassword}
          options={screenOptions}
        />
        <Stack.Screen
          name="Product"
          component={ProductPage}
          options={screenOptions}
        />
        <Stack.Screen
          name="RenderProducts"
          component={RenderProducts}
          options={screenOptions}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={screenOptions}
        />
        <Stack.Screen
          name="WishlistScreen"
          component={WishlistScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={screenOptions}
        />
        <Stack.Screen
          name="Profile"
          component={About}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
