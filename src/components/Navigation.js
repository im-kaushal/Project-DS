import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from '../screen/LandingPage';
//import Categories from '../screen/Categories';
import Profile from '../screen/Profile';
import ContactUs from '../screen/Contact';
import Home from '../screen/Home';
import SignUpPage from '../screen/SignUpPage';
import Product from '../screen/Product';
import Splash from '../screen/SplashScreen';
//import {enableScreens} from 'react-native-screens';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />

        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Profile" component={Profile} />
        {/* <Stack.Screen name="Categories" component={Categories} /> */}
        <Stack.Screen name="Contact" component={ContactUs} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
