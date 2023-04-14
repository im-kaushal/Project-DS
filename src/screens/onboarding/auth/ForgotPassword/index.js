import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import firebase from '../firebase';
import Input from '../../../../components/Input';
import styles from './index.styles';
import Strings from '../../../../constants/Strings';
import Button from '../../../../components/Button';
import ResetImage from '../../../../assets/svg/ResetImage';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleResetPassword = () => {
    // try {
    //   const otp = otpGenerator.generate(6, {
    //     digits: true,
    //     alphabets: false,
    //     upperCase: false,
    //     specialChars: false,
    //   });
    //   await firebase.auth().sendPasswordResetEmail(email, {
    //     handleCodeInApp: true,
    //     oobCode: otp,
    //   });
    //setMessage('Password reset link has been sent to your email address');
    // navigation.navigate('OTPScreen', {email});
    // } catch (error) {
    //   setMessage(`Error: ${error.message}`);
    // }
    navigation.navigate('OTPScreen');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Strings.forgot_password}</Text>
      <ResetImage style={styles.img} />

      <Text style={styles.description}>{Strings.forgot_text}</Text>
      <Input
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        placeholder="+91 7970513448"
        keyboardType="phone-pad"
        autoCapitalize="none"
      />
      <Button text={Strings.reset} onPress={handleResetPassword} />
      {message && (
        <Text style={[styles.message, styles.success]}>{message}</Text>
      )}
      {error && <Text style={[styles.message, styles.error]}>{error}</Text>}
    </View>
  );
};

export default ForgotPasswordScreen;
