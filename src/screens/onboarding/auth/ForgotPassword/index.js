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

const ForgotPasswordScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const handleResetPassword = async () => {
    try {
      // const withCountryCode = `+91${phone}`;
      // console.log('with country code ', withCountryCode);
      // const confirmation = await auth().signInWithPhoneNumber(withCountryCode);
      // console.log('confirmaton... here...', confirmation);
      // setConfirm(confirmation);
      // navigation.navigate('OTPScreen', {
      //   confirm: confirmation,
      //   phone,
      // });
      navigation.navigate('OTPScreen');
    } catch (error) {
      showMessage({
        message: error.message,
        type: 'danger',
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{Strings.forgot_password}</Text>
      <ResetImage style={styles.img} />

      <Text style={styles.description}>{Strings.forgot_text}</Text>
      <Input
        value={phone}
        onChangeText={text => setPhone(text)}
        style={styles.input}
        placeholder={Strings.contact_number_placeholder}
        keyboardType="phone-pad"
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
