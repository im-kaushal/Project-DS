import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import OTPInput from 'react-native-otp-forminput';
import ResendOTPButton from '../../../../components/ResendOtp';
import OtpImg from '../../../../assets/svg/OtpImg';
import styles from '../../../../constants/styles';
import Colors from '../../../../constants/Colors';

import {useTranslation} from 'react-i18next';
import CustomButton from '../../../../components/Button';
const OTPScreen = ({navigation, route}) => {
  const [code, setCode] = useState('');
  const [seconds, setSeconds] = useState(60);
  const [timerActive, setTimerActive] = useState(true);
  const {t} = useTranslation();
  const {confirm, phone} = route.params;
  // console.log('🚀 ~ file: index.js:14 ~ OTPScreen ~ phone:', phone);

  useEffect(() => {
    if (seconds > 0 && timerActive) {
      const intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  const handleResendOTP = () => {
    setSeconds(60);
    setTimerActive(true);
  };

  const CODE_LENGTH = 6;

  async function handleVerify({phone}) {
    if (code) {
      try {
        console.log(Object.keys(confirm));
        await confirm.confirm(code);
        navigation.navigate('ResetPassword', (phone = 'phone'));
      } catch (error) {
        alert('Invalid OTP');
        console.log('error', error);
      }
    } else {
      alert('Please enter OTP');
    }
  }

  // const handleResend = () => {
  //   console.log('resend OTP');
  // };

  return (
    <View style={styles.container}>
      <OtpImg style={styles.img} />

      <OTPInput
        title={t('enter_otp')}
        titleStyle={styles.title}
        subtitle={t('otp_subtitle')}
        subtitleStyle={styles.subtitle}
        type="outline"
        numberOfInputs={CODE_LENGTH}
        cursorColor={Colors.primary}
        borderColor={Colors.primary}
        inputStyle={styles.otpInput}
        onChange={setCode}
      />
      <View>
        <ResendOTPButton />
        <CustomButton text={t('verify')} onPress={handleVerify} />
      </View>
    </View>
  );
};

export default OTPScreen;
