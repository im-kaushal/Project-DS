import {TouchableOpacity} from 'react-native';
import React from 'react';
import CustomIcon from '../Icon';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';

const Back = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{padding: 20, position: 'absolute'}}
      onPress={navigation.goBack}>
      <CustomIcon name="chevron-left" size={25} color={Colors.primary} />
    </TouchableOpacity>
  );
};

export default Back;
