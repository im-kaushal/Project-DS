import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '../Tabs';
import DrawerNavigator from '../Drawer';
import {AuthStack, ProductStack, ProfileStack} from './Navigation';

const Stack = createStackNavigator();
const screenOptions = {
  headerTitle: '',
  headerShown: false,
};
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack, {screen: Splash}">
        {/* Drawer should be prioritised */}
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={screenOptions}
        />
        {/* --------------Importing Stack --------------- */}

        <Stack.Screen
          initial="Splash"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
