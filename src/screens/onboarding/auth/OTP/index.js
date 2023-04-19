import React, {useState} from 'react';
import {View} from 'react-native';

import OTPInput from 'react-native-otp-forminput';
import ResendOTPButton from '../../../../components/ResendOtp';
import OtpImg from '../../../../assets/svg/OtpImg';
import styles from '../../../../constants/styles';
import Colors from '../../../../constants/Colors';
import Strings from '../../../../constants/Strings';

const OTPScreen = ({navigation, route}) => {
  const [code, setCode] = useState('');

  const {confirm, phone} = route.params;
  // console.log('🚀 ~ file: index.js:14 ~ OTPScreen ~ phone:', phone);
  // console.log('🚀 ~ file: index.js:14 ~ OTPScreen ~ confirm:', confirm);

  const CODE_LENGTH = 6;

  async function handleVerify() {
    if (code) {
      try {
        console.log(Object.keys(confirm), 'hiii');
        await confirm.confirm(code);
        navigation.navigate('AuthStack', {
          screen: 'ResetPassword',
          params: {phone},
        });
      } catch (error) {
        alert('Invalid OTP');
        console.log('error', error);
      }
    } else {
      alert('Please enter OTP');
    }
  }

  const handleResend = () => {
    console.log('resend OTP');
  };

  return (
    <View style={styles.container}>
      <OtpImg style={styles.img} />

      <OTPInput
        title={Strings.enter_otp}
        titleStyle={styles.title}
        subtitle={Strings.otp_subtitle}
        subtitleStyle={styles.subtitle}
        type="outline"
        numberOfInputs={CODE_LENGTH}
        cursorColor={Colors.primary}
        borderColor={Colors.primary}
        inputStyle={styles.otpInput}
        onChange={setCode}
      />

      <ResendOTPButton
        handleVerify={handleVerify}
        handleResend={handleResend}
      />
    </View>
  );
};

export default OTPScreen;
