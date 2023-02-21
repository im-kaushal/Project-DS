import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ContactUs from '../screen/Contact';
import Profile from '../screen/Profile';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contact" component={ContactUs} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
