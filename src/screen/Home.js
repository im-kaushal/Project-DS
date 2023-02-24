import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';

const Home = props => {
  const description =
    'Say goodbye to long lines and crowded stores with our e-commerce app. Shop anytime, anywhere, and get your purchases delivered straight to your doorstep. Get the ultimate shopping experience with our e-commerce app. With personalized recommendations, fast and secure checkout, and 24/7 customer support, we make shopping online easy and enjoyable.';
  return (
    <ImageBackground
      source={{
        uri: 'https://images.pexels.com/photos/7078033/pexels-photo-7078033.jpeg?auto=compress&cs=tinysrgb&w=2400',
      }}
      style={styles.Container}
      resizeMode="cover">
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require('../assets/images/cartoon.png')}
        />

        <Text style={styles.mainHeader}>EcomExpress✨</Text>

        <Text style={styles.paraStyle}>{description} </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    direction: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },

  homeTop: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'justify',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1.5,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: '#344055',
  },

  paraStyle: {
    paddingHorizontal: 10,
    textAlign: 'justify',
    fontSize: 15,
    color: '#344055',
    marginTop: 30,
    lineHeight: 25,
  },
});

export default Home;
