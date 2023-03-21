import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ContactUs from '../screen/Contact';
import Profile from '../screen/Profile';
import ChatScreen from '../components/Chat';
import Location from '../components/Geolocation';
import CustomDrawer from '../components/CustomDrawer';
//import Header from '../components/Header';
import Home from '../screen/Home';
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawer {...props} drawerStyle={{width: '100%'}} />
      )}>
      {/* <Drawer.Screen name="Header" component={Header} /> */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contact" component={ContactUs} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Location" component={Location} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
