import {createStackNavigator} from '@react-navigation/stack';
import LandingPage from '../../screen/onboarding/display/LandingPage';
import Splash from '../../screen/onboarding/display/SplashScreen';
import LoginScreen from '../../screen/onboarding/LogIn';
import SignUpScreen from '../../screen/onboarding/SignUp';
import ForgetPasswordScreen from '../../screen/onboarding/auth/ForgotPassword';
import OtpScreen from '../../screen/onboarding/auth/OTP';
import ProductPage from '../../screen/Product/ShowProducts';
import ProductDetails from '../../screen/Product/ProductDetails';
import WishlistScreen from '../../screen/Wishlist';
import CartScreen from '../../screen/Cart';
import About from '../../screen/Profile';

const screenOptions = {
  headerTitle: '',
  headerShown: false,
};

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} options={screenOptions} />
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={screenOptions}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="ForgetPasswordScreen"
        component={ForgetPasswordScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export const ProductStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Product"
        component={ProductPage}
        options={screenOptions}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={screenOptions}
      />
      <Stack.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={About} options={screenOptions} />
    </Stack.Navigator>
  );
};

export const DrawerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};
