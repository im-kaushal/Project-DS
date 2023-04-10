import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from '../screen/onboarding/display/LandingPage';
import Splash from '../screen/onboarding/display/SplashScreen';
import Home from '../screen/home';
import TabNavigator from './Tabs';
import LoginScreen from '../screen/onboarding/login/index.js';
import SignUpScreen from '../screen/onboarding/signup';
import DrawerNavigator from './DrawerNavigator';
import ProductDetails from '../screen/product/productDetails';
import ProductPage from '../screen/product/items';
import WishlistScreen from '../screen/wishlist';
import ForgetPasswordScreen from '../screen/onboarding/auth/forgotPassword';
import CartScreen from '../screen/cart';
import About from '../screen/profile';
import OtpScreen from '../screen/onboarding/auth/OTP';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Product" component={ProductPage} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Profile" component={About} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
