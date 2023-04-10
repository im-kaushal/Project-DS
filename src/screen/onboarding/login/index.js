import React, {useState} from 'react';
import {TouchableOpacity, Alert, View, Text} from 'react-native';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import styles from './index.styles';
import {useSelector} from 'react-redux';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const Navigation = useNavigation();

  const person = useSelector(state => state.user);

  const login = async () => {
    let found = false;
    console.log('coming here', person);
    for (let i = 0; i < person.data.length; i++) {
      console.log(person.data[i].Email == email, 'email ');
      if (person.data[i].Email == email) {
        found = true;
        console.log(person.data[i].Email == email, 'Email Matched');
        if (person.data[i].Password == password) {
          console.log('password match', person.data[i].Password == password);
          await AsyncStorage.setItem('isLoggedIn', '1');
          console.log('isLoggedIn');
          Alert.alert(
            'Success',
            `User ${person.data[0].Email} has successfully logged in!`,
          );
        }
        Navigation.navigate('TabNavigator');
      } else {
        Alert('Email or Password is Incorrect');
        return false;
      }
    }
  };

  const handleForgotPasswordClick = () => {
    Navigation.navigate('ForgetPasswordScreen');
  };

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
      <Button title="Login" onPress={login} />
      <TouchableOpacity onPress={handleForgotPasswordClick}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
