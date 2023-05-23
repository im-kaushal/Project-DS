import React from 'react';

import {View, Text, Image, TouchableOpacity} from 'react-native';
import {webImgs} from '../../../constants/Paths';
import SvgComponent from '../../../assets/svg/Buy';
import styles from '../../../constants/styles';
import BackHandling from '../../../utils/BackHandling';
import {useTranslation} from 'react-i18next';

const LandingPage = ({navigation}) => {
  const {t, i18n} = useTranslation();
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
          <Text style={styles.buttonText}>{t('login_title')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.landingFooter}>
        <View style={styles.landingImage}>
          <SvgComponent />
        </View>

        <View>
          <Text style={styles.title}>{t('Welcome')}</Text>
          <Text style={styles.subtitle}>{t('Shop')}</Text>
        </View>
        <View style={styles.landingFooter}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={styles.buttonText}>{t('sign_up')}</Text>
          </TouchableOpacity>
          <Text style={styles.subtitle}>{t('no_account')}</Text>
        </View>
      </View>
    </View>
  );
};

export default LandingPage;
