import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {useDispatch} from 'react-redux';
import {adduser} from '../../../redux/LoginSlice';
import LoginScreen from '../LogIn/index.js';
import styles from './index.styles';
import {
  isValidEmail,
  isValidMobileNumber,
  isValidPassword,
} from '../../../utils/Validation';

import BackHandling from '../../../utils/BackHandling';
import Strings from '../../../constants/Strings';
import SignupImage from '../../../assets/svg/SignupImage';

const SignUpScreen = ({navigation}) => {
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

    const emailError = isValidEmail(email);
    const mobileNumberError = isValidMobileNumber(mobileNumber);
    const passwordError = isValidPassword(password);

    if (emailError || mobileNumberError || passwordError) {
      setError(emailError || mobileNumberError || passwordError);
      return;
    }

    if (password !== confirmPassword) {
      setError(`${Strings.no_password}`);
      return;
    }

    try {
      Alert.alert('Success!', userObj.Name);
      dispatch(adduser(userObj));
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log(error);
      setError(`${Strings.data_error}`);
    }
  };

  // const handleSignUp = async () => {
  //   console.log('chal gya');
  // };

  return (
    <View style={styles.container}>
      <SignupImage style={styles.img} />
      <BackHandling />
      <Text style={styles.title}>{Strings.sign_up}</Text>
      <Input
        placeholder={Strings.name}
        autoCapitalize="words"
        onChangeText={setName}
        value={name}
      />

      <Input
        placeholder={Strings.email}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <Input
        placeholder={Strings.contact_number_placeholder}
        keyboardType="phone-pad"
        onChangeText={setMobileNumber}
        value={mobileNumber}
      />

      <Input
        placeholder={Strings.password}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Input
        placeholder={Strings.confirm_password_placeholder}
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button text={Strings.sign_up} onPress={handleSignUp} icon="signup" />
    </View>
  );
};

export default SignUpScreen;
