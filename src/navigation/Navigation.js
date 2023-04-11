import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from '../screen/onboarding/display/LandingPage';
import Splash from '../screen/onboarding/display/SplashScreen';
import TabNavigator from './Tabs';
import LoginScreen from '../screen/onboarding/LogIn';
import SignUpScreen from '../screen/onboarding/SignUp';
import ProductDetails from '../screen/Product/ProductDetails';
import ProductPage from '../screen/Product/ShowProducts';
import WishlistScreen from '../screen/Wishlist';
import ForgetPasswordScreen from '../screen/onboarding/auth/ForgotPassword';
import CartScreen from '../screen/Cart';
import About from '../screen/Profile';
import OtpScreen from '../screen/onboarding/auth/OTP';
import StackOne from './StackOne';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerTitle: '',
  headerShown: false,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Screen name="Splash" component={Splash} options={screenOptions} />
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
      <Stack.Navigator>
        <Stack.Screen
          name="StackOne"
          component={StackOne}
          options={screenOptions}
        />

        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={screenOptions}
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
