import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import SvgComponent from '../../../assets/svg/Buy';
import styles from '../../../statics/styles';
import Strings from '../../../statics/Strings';
import LoginScreen from '../login/index.js';
import SignUpScreen from '../signup';
const LandingPage = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.landingHeader}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://github.com/im-kaushal/Media/blob/main/ecom.png?raw=true',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Navigation.navigate(LoginScreen);
          }}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.landingFooter}>
        <View style={styles.landingImage}>
          <SvgComponent />
        </View>
        <View>
          <Text style={styles.title}>{Strings.Welcome}</Text>
          <Text style={styles.subtitle}>
            Shop the latest products and deals
          </Text>
        </View>
        <View style={styles.landingFooter}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => Navigation.navigate(SignUpScreen)}>
            <Text style={styles.buttonText}>Sign Up Now</Text>
          </TouchableOpacity>
          <Text style={styles.subtitle}>Don't have an account?</Text>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;
