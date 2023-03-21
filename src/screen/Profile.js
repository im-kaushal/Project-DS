import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from 'react-native';
import React from 'react';
import Colors from '../statics/styles/Colors';

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
        <Text style={styles.subHeader}> About Me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          A self-driven, hardworking, and astute learner having team
          collaboration, marketing, management, and leadership qualities.
        </Text>
      </View>

      <Text style={styles.subHeader}>Connect Me Through:</Text>

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
    backgroundColor: Colors.bg_light,
  },
  imgStyle: {
    width: 180,
    height: 220,
    borderRadius: 90,
    marginTop: 20,
  },
  mainHeader: {
    fontSize: 35,
    color: Colors.sub_text,
    fontWeight: 'bold',
    // marginTop: 50,
    // marginTop: 20,
    // marginBottom: 10,
  },
  paraStyle: {
    fontSize: 18,
    color: Colors.text,
    paddingBottom: 20,
  },
  minparaStyle: {
    fontSize: 18,
    color: Colors.text,
  },

  aboutLayout: {
    backgroundColor: Colors.bg,
    paddingHorizontal: 30,
  },
  subHeader: {
    fontSize: 18,
    color: Colors.sub_text,
    //textTransform: 'uppercase',
    fontWeight: 'bold',
    marginVertical: 15,

    alignSelf: 'center',
  },
  aboutPara: {
    color: Colors.text,
    fontSize: 18,

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
