import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../../screens/EditProfile';
import Location from '../../screens/Location';
import CustomDrawer from '../../components/CustomDrawer';
import Cart from '../../screens/Cart';
import {useTranslation} from 'react-i18next';
import ContactUs from '../../screens/Contact';
import CustomIcon from '../../components/Icon';
//import ProductPage from '../../screens/Product/ShowProducts';
import Tabs from '../Tabs';
import Settings from '../../screens/Settings';
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {t} = useTranslation();
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
        name={t('shop')}
        component={Tabs}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <CustomIcon name="shopping-cart" size={20} color="black" />
          ),
        }}
        name={t('cart')}
        component={Cart}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => <CustomIcon name="user" size={20} color="black" />,
        }}
        name={t('profile')}
        component={Profile}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <CustomIcon name="map-marker" size={20} color="black" />
          ),
        }}
        name={t('location')}
        component={Location}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => <CustomIcon name="gear" size={20} color="black" />,
        }}
        name={t('setting_screen')}
        component={Settings}
      />

      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <CustomIcon name="address-book" size={20} color="black" />
          ),
        }}
        name={t('contact_us')}
        component={ContactUs}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
