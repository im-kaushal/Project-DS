import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';
import styles from '../../../constants/styles';

import TabNavigator from '../../../navigation/Tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingPage from './LandingPage';
import {webImgs} from '../../../constants/Images';

const Splash = () => {
  const Navigation = useNavigation();
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn', (err, result) => {
        Navigation.navigate(result != 1 ? LandingPage : TabNavigator);
        console.log(value);
      });
    } catch (error) {
      // Error retrieving data
      console.log('error');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      retrieveData();
    }, 1000);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Image source={{uri: webImgs.splashImage}} style={styles.splashImage} />
    </View>
  );
};

export default Splash;
