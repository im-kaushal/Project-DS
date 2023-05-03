import React, {useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import Input from '../../../../components/Input';
import styles from './index.styles';
import Strings from '../../../../constants/Strings';
import Button from '../../../../components/Button';
import ResetImage from '../../../../assets/svg/ResetImage';
import {useTranslation} from 'react-i18next';

const ForgotPasswordScreen = ({navigation, route}) => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [confirm, setConfirm] = useState(null);
  const {t} = useTranslation();
  const handleResetPassword = async () => {
    try {
      const withCountryCode = `+91${phone}`;
      console.log('with country code ', withCountryCode);
      const confirmation = await auth().signInWithPhoneNumber(withCountryCode);
      console.log('confirmaton... here...', confirmation);
      setConfirm(confirmation);
      navigation.navigate('OTPScreen', {
        confirm: confirmation,
        phone,
      });
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('forgot_password')}</Text>
      <ResetImage style={styles.img} />

      <Text style={styles.description}>{t('forgot_text')}</Text>
      <Input
        value={phone}
        onChangeText={text => setPhone(text)}
        style={styles.input}
        placeholder={t('contact_number_placeholder')}
        keyboardType="phone-pad"
      />
      <Button text="Reset Password" onPress={handleResetPassword} />
      {message && (
        <Text style={[styles.message, styles.success]}>{message}</Text>
      )}
      {error && <Text style={[styles.message, styles.error]}>{error}</Text>}
    </View>
  );
};

export default ForgotPasswordScreen;
