import React, {useState} from 'react';
import {View} from 'react-native';

import OTPInput from 'react-native-otp-forminput';
import ResendOTPButton from '../../../../components/ResendOtp';
import OtpImg from '../../../../assets/svg/OtpImg';
import styles from '../../../../constants/styles';
import Colors from '../../../../constants/Colors';
import Strings from '../../../../constants/Strings';

const OTPScreen = ({navigation}) => {
  const [code, setCode] = useState('');

  const CODE_LENGTH = 6;

  const handleValidate = () => {
    console.log('Validating code:', code);
    navigation.navigate('ResetPassword');
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
        onChange={code => {
          console.log(code);
        }}
      />

      <ResendOTPButton onPress={handleValidate} />
    </View>
  );
};

export default OTPScreen;
