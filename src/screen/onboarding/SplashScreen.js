import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Image} from 'react-native';
import styles from '../../statics/styles';

const splashImage =
  'https://github.com/im-kaushal/Media/blob/main/ecom.png?raw=true';

const Splash = () => {
  const Navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      Navigation.navigate('LandingPage');
    }, 1200);
  }, []);

  return (
    <View style={styles.splashContainer}>
      <Image source={{uri: splashImage}} style={styles.splashImage} />
    </View>
  );
};

export default Splash;
