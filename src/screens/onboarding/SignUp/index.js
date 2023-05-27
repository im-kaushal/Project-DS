import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {adduser} from '../../../redux/LoginSlice';

import styles from './index.styles';
import {
  isValidEmail,
  isValidMobileNumber,
  isValidPassword,
} from '../../../utils/Validation';

import BackHandling from '../../../utils/BackHandling';

import SignupImage from '../../../assets/svg/SignupImage';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const {t} = useTranslation();
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
      setError(`${t('no_password')}`);
      return;
    }

    try {
      Alert.alert(t('success'), userObj.Name);
      dispatch(adduser(userObj));
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.log(error);
      setError(`${t('data_error')}`);
    }
  };

  return (
    <View style={styles.container}>
      <SignupImage style={styles.img} />
      <BackHandling />
      <Text style={styles.title}>{t('sign_up')}</Text>
      <Input
        placeholder={t('name')}
        autoCapitalize="words"
        onChangeText={setName}
        value={name}
      />

      <Input
        placeholder={t('email')}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />

      <Input
        placeholder={t('contact_number_placeholder')}
        keyboardType="phone-pad"
        onChangeText={setMobileNumber}
        value={mobileNumber}
      />

      <Input
        placeholder={t('password')}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Input
        placeholder={t('confirm_password_placeholder')}
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button text={t('sign_up')} onPress={handleSignUp} icon="signup" />
    </View>
  );
};

export default SignUpScreen;
