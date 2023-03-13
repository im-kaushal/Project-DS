import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Storage} from '../components/Storage';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const emailRegex = /^\w+([.-]?\w+)*@gmail\.com$/;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

  const handleSignUp = () => {
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid Gmail address.');
    } else {
      setEmailError('');
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.',
      );
    } else {
      setPasswordError('');
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }

    // If  no errors, store the user data
    if (!emailError && !passwordError && !confirmPasswordError) {
      const userData = async () => {
        try {
          await Storage.storeData('user', {name, email, password});
          alert('Sign up successful!');
        } catch (error) {
          console.log(error);
        }

        // Save userData to database or API
      };
      console.log(userData);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Gmail Address"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {passwordError ? (
          <Text style={styles.error}>{passwordError}</Text>
        ) : null}
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {confirmPasswordError ? (
          <Text style={styles.error}>{confirmPasswordError}</Text>
        ) : null}

        <TouchableOpacity style={styles.saveButton} onPress={handleSignUp}>
          <Text style={styles.saveButtonText}>Sign Up</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up with Gmail</Text>
        </TouchableOpacity> */}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff3b0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#e09f3e',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    color: '#540b0e',
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 8,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#335c67',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#540b0e',
    fontSize: 18,
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: '#335c67',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
export default SignUpPage;
