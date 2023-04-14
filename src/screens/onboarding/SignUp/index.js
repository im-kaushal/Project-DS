import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {adduser} from '../../../redux/LoginSlice';
import LoginScreen from '../LogIn/index.js';
import styles from './index.styles';
import {
  isValidEmail,
  isValidMobileNumber,
  isValidPassword,
} from '../../../utils/Validation';
import {Storage} from '../../../utils/Storage';
//import BackHandling from '../../../utils/BackHandling';
import Strings from '../../../constants/Strings';
import SignupImage from '../../../assets/svg/SignupImage';
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
      <SignupImage style={styles.img} />
      {/* <BackHandling /> */}
      <Text style={styles.title}>{Strings.sign_up}</Text>
      <Input
        placeholder="Name"
        autoCapitalize="words"
        onChangeText={setName}
        value={name}
      />

      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <Input
        placeholder="Mobile Number"
        keyboardType="phone-pad"
        onChangeText={setMobileNumber}
        value={mobileNumber}
      />

      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      <Input
        placeholder="Confirm Password"
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
