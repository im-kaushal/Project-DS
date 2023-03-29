import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDrawer from '../CustomDrawer';
import styles from './index.styles';

const Header = () => {
  const Navigation = useNavigation();
  return (
    // <View style={styles.top}>
    //   <TouchableOpacity onPress={() => Navigation.navigate(CustomDrawer)}>
    //     <Icon name="menu-outline" size={30} />
    //   </TouchableOpacity>

    <TouchableOpacity>
      <Icon name="heart-outline" size={30} />
    </TouchableOpacity>
  );
};

export default Header;
