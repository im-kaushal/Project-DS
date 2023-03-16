import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from './Login';
const SignUpScreen = () => {
  const Navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    if (
      name.length === 0 ||
      email.length === 0 ||
      mobileNumber.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setError('All fields are required');
    } else if (!isValidEmail(email)) {
      setError('Invalid email address');
    } else if (!isValidMobileNumber(mobileNumber)) {
      setError('Invalid mobile number');
    } else if (!isValidPassword(password)) {
      setError(
        'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number',
      );
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        const user = {name, email, mobileNumber, password};
        await AsyncStorage.setItem('user', JSON.stringify(user));
        Navigation.navigate(LoginScreen);
      } catch (e) {
        setError('An error occurred');
      }
    }
  };

  const isValidEmail = email => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const isValidMobileNumber = mobileNumber => {
    const mobileNumberRegex = /^[0-9]{10}$/;
    return mobileNumberRegex.test(mobileNumber);
  };

  const isValidPassword = password => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Input
        placeholder="Name"
        autoCapitalize="words"
        onChangeText={setName}
        value={name}
        leftIcon={{type: 'material', name: 'person'}}
      />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
        leftIcon={{type: 'material', name: 'email'}}
      />
      <Input
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        onChangeText={setMobileNumber}
        value={mobileNumber}
        leftIcon={{type: 'material', name: 'phone'}}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        leftIcon={{type: 'material', name: 'lock'}}
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        leftIcon={{type: 'material', name: 'lock'}}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
export default SignUpScreen;
