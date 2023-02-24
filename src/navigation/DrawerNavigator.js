import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ContactUs from '../screen/Contact';
import Profile from '../screen/Profile';
import ChatScreen from '../components/Chat';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contact" component={ContactUs} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;