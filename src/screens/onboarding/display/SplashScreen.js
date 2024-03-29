import React, {useEffect} from 'react';

import {View, Image} from 'react-native';
import styles from '../../../constants/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LandingPage from './LandingPage';
import {webImgs} from '../../../constants/Paths';

const Splash = ({navigation}) => {
  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn', (err, result) => {
        navigation.navigate(result != 1 ? LandingPage : 'Drawer');
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
