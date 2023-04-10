import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import firebase from '../firebase';
import styles from './index.styles';

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
    navigation.navigate('OtpScreen', {email});
    // } catch (error) {
    //   setMessage(`Error: ${error.message}`);
    // }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Your Password?</Text>
      <Text style={styles.description}>
        Enter your email address to receive a password reset link.
      </Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
      {message && (
        <Text style={[styles.message, styles.success]}>{message}</Text>
      )}
      {error && <Text style={[styles.message, styles.error]}>{error}</Text>}
    </View>
  );
};

export default ForgotPasswordScreen;
