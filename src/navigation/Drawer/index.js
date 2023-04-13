import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../../screens/Profile';
import Location from '../../components/Location';
import CustomDrawer from '../../components/CustomDrawer';
import CartScreen from '../../screens/Cart';

import Tabs from '../Tabs';
import ContactUs from '../../screens/Contact';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Shop" component={Tabs} />
      {/* <Drawer.Screen name="Product" component={ProductPage} /> */}
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Location" component={Location} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
