import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import TabNavigator from '../navigation/BottomTab';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigation = useNavigation();
  // const handleLogin = async () => {
  //   const isValidEmail = regexValidator.validateEmail(email);
  //   const isValidPassword = regexValidator.validatePassword(password);
  //   if (isValidEmail && isValidPassword) {
  //     try {
  //       const user = await AsyncStorage.getItem('user');
  //       if (user !== null) {
  //         const {email: storedEmail, password: storedPassword} =
  //           JSON.parse(user);
  //         if (email === storedEmail && password === storedPassword) {
  //           // Navigate to home screen
  //           Navigation.navigate(Home);
  //         } else {
  //           setError('Invalid email or password');
  //         }
  //       } else {
  //         setError('User not found');
  //       }
  //     } catch (e) {
  //       setError('An error occurred');
  //     }
  //   } else {
  //     setError('Invalid email or password');
  //   }
  // };
  const handleLogin = Navigation.navigate(TabNavigator);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
        leftIcon={{type: 'material', name: 'email'}}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        leftIcon={{type: 'material', name: 'lock'}}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
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
export default LoginScreen;
