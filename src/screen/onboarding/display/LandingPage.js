import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {webImgs} from '../../../constants/Images';
import SvgComponent from '../../../assets/svg/Buy';
import styles from '../../../constants/styles';
import Strings from '../../../constants/Strings';
import LoginScreen from '../LogIn/index.js';
import SignUpScreen from '../SignUp';
const LandingPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
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
            navigation.navigate(LoginScreen);
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
            onPress={() => navigation.navigate(SignUpScreen)}>
            <Text style={styles.buttonText}>Sign Up Now</Text>
          </TouchableOpacity>
          <Text style={styles.subtitle}>Don't have an account?</Text>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;
