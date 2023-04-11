import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screen/Profile';
import Location from '../components/Location';
import CustomDrawer from '../components/CustomDrawer';
import CartScreen from '../screen/Cart';

import ProductPage from '../screen/Product/ShowProducts';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Product" component={ProductPage} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Location" component={Location} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
