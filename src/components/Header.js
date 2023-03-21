import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomDrawer from './CustomDrawer';
import styles from '../statics/styles';

const Header = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.header}>
      {/* <TouchableOpacity onPress={() => Navigation.navigate(CustomDrawer)}>
        <Icon name="menu-outline" size={30} color={Colors.text} />
      </TouchableOpacity> */}

      <TouchableOpacity>
        <Icon name="heart-outline" size={30} color={Colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
