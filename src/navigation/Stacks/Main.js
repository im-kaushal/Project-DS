import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '../Tabs';
import {AuthStack, ProductStack, ProfileStack, DrawerStack} from './Navigation';

const Stack = createStackNavigator();
const screenOptions = {
  headerTitle: '',
  headerShown: false,
};
const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen
          name="DrawerStack"
          component={DrawerStack}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
