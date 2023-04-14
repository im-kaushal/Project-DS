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
  abc,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, abc]}
        placeholder={placeholder}
        placeholderTextColor={Colors.secondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
