import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';
import styles from '../../statics/styles';
import SignUpScreen from './SignUpPage';
import TabNavigator from '../../navigation/BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingPage from './LandingPage';

const splashImage =
  'https://github.com/im-kaushal/Media/blob/main/ecom.png?raw=true';

const Splash = () => {
  const Navigation = useNavigation();
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn', (err, result) => {
        Navigation.navigate(result != 1 ? LandingPage : TabNavigator);
        console.log(result);
      });
    } catch (error) {
      // Error retrieving data
      console.log('error');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      retrieveData();
    }, 1200);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Image source={{uri: splashImage}} style={styles.splashImage} />
    </View>
  );
};

export default Splash;
