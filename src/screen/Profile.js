import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Kaushal Kr.</Text>
      <Text style={styles.paraStyle}> SET @Damco Solutions 😀 </Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={require('../../assets/kidPng.png')}
        />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About Me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          A self-driven, hardworking, and astute learner having team
          collaboration, marketing, management, and leadership qualities.
        </Text>
      </View>

      <Text style={styles.mainHeader}>Connect Me Through:</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/ixkaushal/')
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA',
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/187/187210.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://discord.gg/AN8ThRBXtY')}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/906/906361.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    fontWeight: 'Bold',
    // marginTop: 50,
    marginTop: 40,
    marginBottom: 10,
    fontFamily: 'Nunito_700Bold',
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30,
    fontFamily: 'WorkSans_400Regular',
  },
  aboutLayout: {
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    // marginVertical: 30,
    marginTop: 20,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    fontFamily: 'Nunito_700Bold',
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'WorkSans_400Regular',
    lineHeight: 26,
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
