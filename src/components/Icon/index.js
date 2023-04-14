import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomIcon = ({name, size, color}) => {
  return (
    <View>
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

export default CustomIcon;
