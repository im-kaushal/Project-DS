import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Menu from '../components/Menu';

const Home = props => {
  const description =
    'Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ';

  return (
    <View style={styles.Container}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require('../../assets/cartoon.jpg')}
        />

        <Text style={styles.mainHeader}>Hey Buddy! Welcome✨</Text>

        <Text style={styles.paraStyle}>{description} </Text>
      </View>

      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        {/* <View
          style={[
            styles.lineStyle,
            {
              marginVertical: 5,
            },
          ]}></View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  homeTop: {
    // height: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'none',
    fontFamily: 'Nunito_600SemiBold',
  },

  paraStyle: {
    fontSize: 15,
    color: '#7d7d7d',
    marginTop: 30,
    alignItems: 'stretch',
    // paddingBottom: 40,
    lineHeight: 25,
    fontFamily: 'Nunito',
  },

  lineStyle: {
    marginBottom: 3,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});

export default Home;
