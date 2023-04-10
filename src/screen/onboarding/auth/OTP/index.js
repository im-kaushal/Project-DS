import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import OTPVerify from 'react-native-otp-verify';
import styles from './index.styles';
const OTPScreen = () => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    OTPVerify.getHash().then(hash => {
      console.log(`Hash: ${hash}`);
      console.log(`OTP: ${otp}`);

      if (OTPVerify.verify(hash, otp)) {
        console.log('OTP verification successful!');
      } else {
        console.log('OTP verification failed!');
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP:</Text>
      <TextInput style={styles.input} value={otp} onChangeText={setOtp} />
      <Button title="Verify OTP" onPress={handleVerifyOTP} />
    </View>
  );
};

export default OTPScreen;
