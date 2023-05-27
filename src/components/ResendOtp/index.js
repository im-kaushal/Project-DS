import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './index.styles';
import {useTranslation} from 'react-i18next';
import {showMessage} from 'react-native-flash-message';
import Button from '../Button';
import auth from '@react-native-firebase/auth';
import BackgroundTimer from 'react-native-background-timer';

const ResendOTPButton = ({navigation}) => {
  const [timer, setTimer] = useState(60);

  const {t} = useTranslation();

  useEffect(() => {
    const interval = BackgroundTimer.setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);

    if (timer === 0) {
      BackgroundTimer.clearInterval(interval);
    }

    return () => {
      BackgroundTimer.clearInterval(interval);
    };
  }, [timer]);

  const handleResend = async () => {
    try {
      const withCountryCode = `+91${phone}`;
      console.log('with country code ', withCountryCode);
      const confirmation = await auth().signInWithPhoneNumber(withCountryCode);
      console.log('confirmation... here...', confirmation);
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  };

  return (
    <View style={styles.container}>
      {timer === 0 ? (
        <Button text={t('resend_otp')} onPress={handleResend} />
      ) : (
        <Text style={styles.timer}>
          {t('resend_otp')} in {timer} secs.
        </Text>
      )}
    </View>
  );
};

export default ResendOTPButton;
