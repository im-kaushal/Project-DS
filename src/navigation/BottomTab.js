import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../screen/Home';
import Product from '../screen/Product';
import DrawerNavigator from './DrawerNavigator';
import CartContainer from '../store/container/CartContainer';

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
          } else if (route.name === 'More') {
            iconName = 'ellipsis-h';
          }

          return <FontAwesome name={iconName} size={30} color="#00141a" />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Product" component={Product} />
      <Tab.Screen name="Cart" component={CartContainer} />
      <Tab.Screen
        name="More"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
