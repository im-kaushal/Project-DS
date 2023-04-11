import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screen/onboarding/display/SplashScreen';
import LoginScreen from '../screen/onboarding/LogIn';
import SignUpScreen from '../screen/onboarding/SignUp';
import ForgotPasswordScreen from '../screen/onboarding/auth/ForgotPassword';
import OTPScreen from '../screen/onboarding/auth/OTP';
import DrawerNavigator from './Drawer';

const StackOne = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Forgot" component={ForgotPasswordScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
    </Stack.Navigator>
  );
};

export default StackOne;
