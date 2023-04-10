import React from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import {cartTotalSelector} from '../redux/Selector';

import Product from '../screen/product/items';
import DrawerNavigator from './DrawerNavigator';
import CartScreen from '../screen/cart';

import Colors from '../statics/Colors';
import styles from '../statics/styles';
import Profile from '../screen/profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const total = useSelector(cartTotalSelector);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: () => null, // hide the label
        tabBarStyle: {backgroundColor: Colors.background},
        tabBarIcon: ({focused}) => {
          let iconName;

          //
          if (route.name === 'Product') {
            iconName = 'spinner';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }

          return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome
                name={iconName}
                size={25}
                color={focused ? Colors.primary : Colors.text}
                // borderTopWidth={focused ? 1 : 0}
              />
            </View>
          );
        },
      })}>
      {/* <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{headerShown: false}}
      /> */}

      <Tab.Screen
        name="Product"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={() => ({
          tabBarBadge: total || null,
          tabBarBadgeStyle: styles.badge,
        })}
      />

      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
