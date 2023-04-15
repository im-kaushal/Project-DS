import React, {useState, useEffect} from 'react';
import OTPInput from 'react-native-otp-forminput';
import {Button, View} from 'react-native';
import OtpImg from '../../../../assets/svg/OtpImg';
import styles from '../../../../constants/styles';
const OTPScreen = ({navigation}) => {
  const [code, setCode] = useState('');

  const CODE_LENGTH = 4;
  const [buttonColor, setButtonColor] = useState('#CCCCCC');

  const handleValidate = () => {
    console.log('Validating code:', code);
    navigation.navigate('ResetPassword');
  };

  useEffect(() => {
    if (code.length === CODE_LENGTH) {
      setButtonColor('#007AFF');
    } else {
      setButtonColor('#CCCCCC');
    }
  }, [code]);

  return (
    <View style={styles.container}>
      <OtpImg style={styles.img} />

      <OTPInput
        title="Enter OTP"
        type="outline"
        onChange={code => {
          console.log(code);
        }}
      />

      <Button title="Validate" onPress={handleValidate} color={buttonColor} />
    </View>
  );
};

export default OTPScreen;
