import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './index.styles';
import Colors from '../../constants/Colors';

const Input = ({placeholder, value, onChangeText, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Colors.secondary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
