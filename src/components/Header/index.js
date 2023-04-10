import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './index.styles';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.top}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <FontAwesome name="arrow-left" size={25} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name="heart" size={25} color="red" />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
