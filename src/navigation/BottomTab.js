import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Product from '../screen/Product';
import DrawerNavigator from './DrawerNavigator';
import CartScreen from '../screen/CartScreen';
import Home from '../screen/Home';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        labelStyle: {
          display: 'none', // hide the label
        },
        tabBarIcon: ({}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Product') {
            iconName = 'spinner';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          }

          return <FontAwesome name={iconName} size={30} color="#00141a" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Product" component={Product} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
