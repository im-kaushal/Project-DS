import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import {webImgs} from '../../../constants/Images';
import SvgComponent from '../../../assets/svg/Buy';
import styles from '../../../constants/styles';
import Strings from '../../../constants/Strings';
import SignUpScreen from '../SignUp';
import LoginScreen from '../LogIn';
import BackHandling from '../../../utils/BackHandling';

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackHandling />
      <View style={styles.landingHeader}>
        <Image
          style={styles.logo}
          source={{
            uri: webImgs.logo,
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}>
          <Text style={styles.buttonText}>{Strings.login_title}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.landingFooter}>
        <View style={styles.landingImage}>
          <SvgComponent />
        </View>
        <View>
          <Text style={styles.title}>{Strings.Welcome}</Text>
          <Text style={styles.subtitle}>{Strings.Shop}</Text>
        </View>
        <View style={styles.landingFooter}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.buttonText}>{Strings.sign_up}</Text>
          </TouchableOpacity>
          <Text style={styles.subtitle}>{Strings.no_account}</Text>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;
