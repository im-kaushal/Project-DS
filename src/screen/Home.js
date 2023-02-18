import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React from 'react';
import Menu from '../components/Menu';

const Home = props => {
  const description =
    'Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ';

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
          source={require('../../assets/cartoonPng.png')}
        />

        <Text style={styles.mainHeader}>Hey Buddy! Welcome✨</Text>

        <Text style={styles.paraStyle}>{description} </Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
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
  menuStyle: {
    justifyContent: 'space-between',
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'justify',
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
    fontSize: 15,
    color: '#344055',
    marginTop: 30,
    textAlign: 'justify',
    lineHeight: 25,
  },

  lineStyle: {
    alignItems: 'baseline',
    marginBottom: 3,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});

export default Home;
