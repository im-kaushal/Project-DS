import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../../screens/Profile/EditProfile';
import Location from '../../components/Location';
import CustomDrawer from '../../components/CustomDrawer';
import CartScreen from '../../screens/Cart';

import TabNavigator from '../Tabs';
import ContactUs from '../../screens/Contact';
import CustomIcon from '../../components/Icon';
import ProductPage from '../../screens/Product/ShowProducts';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <CustomIcon name="shopping-bag" size={20} color="black" />
          ),
        }}
        name="Shop"
        component={ProductPage}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <CustomIcon name="shopping-cart" size={20} color="black" />
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <CustomIcon name="user" size={20} color="black" />,
        }}
        name="Profile"
        component={Profile}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <CustomIcon name="map-marker" size={20} color="black" />
          ),
        }}
        name="Location"
        component={Location}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <CustomIcon name="address-book" size={20} color="black" />
          ),
        }}
        name="Contact Us"
        component={ContactUs}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
