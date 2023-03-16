import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import SignUpPage from './SignUpPage';
import SvgComponent from '../components/Svg';
import {Colors} from '../assets/Colors';
import LoginScreen from './Login';

const LandingPage = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://github.com/im-kaushal/Media/blob/main/ecom.png?raw=true',
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Navigation.navigate('LoginScreen');
          }}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <SvgComponent />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Our E-commerce Store</Text>
        <Text style={styles.subtitle}>Shop the latest products and deals</Text>
        <TouchableOpacity
          style={styles.SignUpButton}
          onPress={() => Navigation.navigate(SignUpPage)}>
          <Text style={styles.SignUpButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg_light,
  },
  image: {
    alignContent: 'center',
    justifyContent: 'center',
    height: '50%',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: Colors.bg,
    elevation: 3,
  },
  logo: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1.5,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
  },
  button: {
    backgroundColor: Colors.btn,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: Colors.text,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: Colors.sub_text,
  },
  SignUpButton: {
    backgroundColor: Colors.btn,
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 50,
    marginTop: 30,
  },
  SignUpButtonText: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LandingPage;
