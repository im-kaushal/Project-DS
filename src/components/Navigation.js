import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LandingPage from '../screen/LandingPage';
import Profile from '../screen/Profile';
import ContactUs from '../screen/Contact';
import Home from '../screen/Home';
import SignUpPage from '../screen/SignUpPage';

import Splash from '../screen/SplashScreen';
import DrawerNavigator from './DrawerNavigator';

import store from '../store/Store';
import Product from '../screen/Product';
import Cart from './Cart';
import {Provider} from 'react-redux';

const {Navigator: TabNavigator, Screen: TabScreen} = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator.Navigator initialRouteName="Splash" headerMode="none">
          <StackNavigator.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <StackNavigator.Screen
            name="LandingPage"
            component={LandingPage}
            options={{headerShown: false}}
          />
          <StackNavigator.Screen name="SignUpPage" component={SignUpPage} />
          <StackNavigator.Screen name="Profile" component={Profile} />
          <StackNavigator.Screen name="Contact" component={ContactUs} />
          <StackNavigator.Screen name="Main">
            {() => (
              <TabNavigator>
                <TabScreen name="Home" component={Home} />
                <TabScreen name="Cart" component={Cart} />
                <TabScreen name="Product" component={Product} />
                <TabScreen name="DrawerNavigator" component={DrawerNavigator} />
              </TabNavigator>
            )}
          </StackNavigator.Screen>
        </StackNavigator.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export {Navigation};
