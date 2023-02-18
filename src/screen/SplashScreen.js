import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';

const splashImage =
  'https://cdn.pixabay.com/photo/2014/04/03/10/00/shopping-cart-309592_1280.png';

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
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default Splash;
