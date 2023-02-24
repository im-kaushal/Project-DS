import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/Home';
import Product from '../screen/Product';
import Cart from '../components/Cart';
import DrawerNavigator from './DrawerNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Product') {
            iconName = 'spinner';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'DrawerNavigator') {
            iconName = 'bars';
          }

          return <FontAwesome name={iconName} size={30} color="#00141a" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarOptions: {showLabel: false},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Product" component={Product} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;