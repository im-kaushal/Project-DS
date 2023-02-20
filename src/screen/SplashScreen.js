import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const splashImage =
  'https://github.com/im-kaushal/Media/blob/main/ecom.png?raw=true';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LandingPage');
    }, 1200);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{uri: splashImage}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E3DFFD',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Splash;
