import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './index.styles';
import Colors from '../../constants/Colors';

const Input = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  newStyles,
}) => {
  return (
    <TextInput
      style={[styles.input, newStyles]}
      placeholder={placeholder}
      placeholderTextColor={Colors.warning}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

export default Input;
