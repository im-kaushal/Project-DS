import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
        />
      </View>

      <Text style={styles.mainHeader}>Kaushal Kr.</Text>
      <Text style={styles.minparaStyle}> SET @Damco Solutions 😀 </Text>

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
              uri: 'https://cdn-icons-png.flaticon.com/512/1384/1384015.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/in/im-kaushal/')
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3669/3669739.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL('https://github.com/im-kaushal')}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/2111/2111432.png',
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
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f0',
  },
  imgStyle: {
    width: 180,
    height: 220,
    borderRadius: 90,
    marginTop: 20,
  },
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    fontWeight: 'Bold',
    // marginTop: 50,
    // marginTop: 20,
    // marginBottom: 10,
    fontFamily: 'Nunito_700Bold',
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 20,
    fontFamily: 'WorkSans_400Regular',
  },
  minparaStyle: {
    fontSize: 18,
    color: '#7d7d7d',
  },

  aboutLayout: {
    backgroundColor: '#0d001a',
    paddingHorizontal: 30,
    // marginVertical: 30,
    //marginTop: 25,
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
    textAlign: 'justify',
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconStyle: {
    width: '100%',
    height: 30,
    aspectRatio: 1,
    marginBottom: 20,
  },
});

export default About;
