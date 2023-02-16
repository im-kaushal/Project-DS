import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Home from './Home';
import SignUpPage from './SignUpPage';

const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2014/04/03/10/00/shopping-cart-309592_1280.png',
          }}
          style={styles.logo}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(Home);
          }}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={{
            uri: 'https://cdn.pixabay.com/photo/2017/09/23/13/48/sale-2778918_1280.png',
          }}
        />
        <Text style={styles.title}>Welcome to Our E-commerce Store</Text>
        <Text style={styles.subtitle}>Shop the latest products and deals</Text>
        <TouchableOpacity
          style={styles.SignUpButton}
          onPress={() => navigation.navigate(SignUpPage)}>
          <Text style={styles.SignUpButtonText}>Create An Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  logo: {
    width: 40,
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
    backgroundColor: '#f7931e',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
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
    color: '#e91e63',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#888',
  },
  SignUpButton: {
    backgroundColor: '#e91e63',
    paddingVertical: 18,
    paddingHorizontal: 80,
    borderRadius: 50,
    marginTop: 30,
  },
  SignUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LandingPage;
