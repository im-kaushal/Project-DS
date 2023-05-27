import React, {useState} from 'react';
import {Alert, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import styles from './index.styles';
import {useSelector} from 'react-redux';
import Input from '../../../components/Input';
import LoginImg from '../../../assets/svg/LoginImg';
import Button from '../../../components/Button';
import Strings from '../../../constants/Strings';
import {useTranslation} from 'react-i18next';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');
  const navigation = useNavigation();

  const user = useSelector(state => state.user);
  const updatedUser = useSelector(state => state.updatedUser);
  const {t} = useTranslation();

  const login = async () => {
    let found = false;
    const loginData = updatedUser ? updatedUser : user;

    for (let i = 0; i < loginData.data.length; i++) {
      if (
        loginData.data[i].Email === email &&
        loginData.data[i].Password === password
      ) {
        found = true;
        await AsyncStorage.setItem('isLoggedIn', '1');
        Alert.alert('Success!', `${loginData.data[i].Name} ${Strings.Welcome}`);
        navigation.navigate('Drawer');
        break; // Exit the loop once a match is found
      }
    }

    if (!found) {
      Alert.alert(t('error_email_password'));
    }
  };

  const handleForgotPasswordClick = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <LoginImg style={styles.img} />
      <Text style={styles.title}>{t('login_title')}</Text>
      <Input
        placeholder={t('email_placeholder')}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <Input
        style={styles.input}
        placeholder={t('password_placeholder')}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.btn}>
        <Button
          text={t('sign_up')}
          icon="signup"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
        <Button text={t('login_title')} onPress={login} icon="login" />
        <View style={styles.space}></View>
      </View>
      <Button
        onPress={handleForgotPasswordClick}
        text={t('forgot_password')}
        icon="forgot"
      />
    </View>
  );
};

export default LoginScreen;
