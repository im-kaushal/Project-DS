import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {adduser} from '../../../redux/LoginSlice';
import LoginScreen from '../login/index.js';
import styles from './index.styles';
import {
  isValidEmail,
  isValidMobileNumber,
  isValidPassword,
} from '../../../utils/validation';
import {Storage} from '../../../utils/Storage';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async () => {
    const userObj = {
      Name: name,
      Email: email,
      Password: password,
      Number: mobileNumber,
    };
    console.log('🚀 ~ file: index.js:34 ~ handleSignUp ~ userObj:', userObj);

    const emailError = isValidEmail(email);
    const mobileNumberError = isValidMobileNumber(mobileNumber);
    const passwordError = isValidPassword(password);

    if (emailError || mobileNumberError || passwordError) {
      setError(emailError || mobileNumberError || passwordError);
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await Storage.storeData(email, userObj);
      Alert.alert(
        'Success!',
        `${userObj.Name}, your account created successfully!`,
      );
      dispatch(adduser(userObj));
      navigation.navigate(LoginScreen);
    } catch (error) {
      console.log(error);
      setError('Error occurred while storing data');
    }
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

export default SignUpScreen;
