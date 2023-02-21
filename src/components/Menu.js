import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <FontAwesomeIcon name="home" size={30} color="#00141a" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Product')}>
        <FontAwesomeIcon name="spinner" size={30} color="#00141a" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <FontAwesomeIcon name="shopping-cart" size={30} color="#00141a" />
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <FontAwesomeIcon name="user" size={30} color="#00141a" />
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => navigation.navigate('DrawerNavogator')}>
        <FontAwesomeIcon name="bars" size={30} color="#00141a" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textStyle: {
    textTransform: 'full-size-kana',
  },
  iconStytle: {
    width: '100%',
    height: 50,
  },
});

export default Menu;
