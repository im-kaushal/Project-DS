import {useNavigation, DrawerActions} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import styles from './index.styles';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.top}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon name="bars" size={25} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
      <TouchableOpacity>
        <Icon name="heart" size={25} color="red" />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
