import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../screen/profile';
import Location from '../components/Location';
import CustomDrawer from '../components/CustomDrawer';
import CartScreen from '../screen/cart';
import Home from '../screen/home';
import ProductPage from '../screen/product/items';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      {/* <Drawer.Screen name="Header" component={Header} /> */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Product" component={ProductPage} />
      <Drawer.Screen name="Cart" component={CartScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Location" component={Location} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
