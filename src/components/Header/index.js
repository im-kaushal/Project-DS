import {useNavigation, DrawerActions} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import styles from './index.styles';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.top}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Icon name="bars" size={25} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="heart" size={25} color="red" />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
