import {useNavigation, DrawerActions} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import styles from './index.styles';

const Header = ({title, showHeartIcon, showBellIcon}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.top}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Icon name="bars" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
      {showHeartIcon && (
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Icon name="heart" size={25} color="red" />
        </TouchableOpacity>
      )}
      {showBellIcon && (
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Icon name="bell-o" size={24} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
