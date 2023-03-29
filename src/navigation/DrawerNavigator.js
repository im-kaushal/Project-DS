import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ContactUs from '../screen/Contact';
import Profile from '../screen/Profile';
import ChatScreen from '../components/Chat/Chat';
import Location from '../components/Location';
import CustomDrawer from '../components/CustomDrawer';
//import Header from '../components/Header';
import Home from '../screen/Home';
import ProductPage from '../screen/Product';
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      {/* <Drawer.Screen name="Header" component={Header} /> */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Product" component={ProductPage} />
      <Drawer.Screen name="Contact" component={ContactUs} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Location" component={Location} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
