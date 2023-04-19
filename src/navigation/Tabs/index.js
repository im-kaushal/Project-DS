import React from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import {cartTotalSelector} from '../../redux/Selector';
import CartScreen from '../../screens/Cart';
import Colors from '../../constants/Colors';
import styles from '../../constants/styles';
import Profile from '../../screens/Profile/EditProfile';
import ProductPage from '../../screens/Product/ShowProducts';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const total = useSelector(cartTotalSelector);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {backgroundColor: Colors.background},
        tabBarIcon: ({focused}) => {
          let iconName;

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
              />
            </View>
          );
        },
      })}>
      <Tab.Screen name="Product" component={ProductPage} />

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
