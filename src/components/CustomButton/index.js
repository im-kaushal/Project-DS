import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './index.styles';

const CustomButton = ({
  text,
  onPress,
  color,
  textColor,
  textSize,
  borderRadius,
  paddingVertical,
  paddingHorizontal,
}) => {
  const buttonStyles = [
    styles.button,
    color && {backgroundColor: color},
    borderRadius && {borderRadius},
    paddingVertical && {paddingVertical},
    paddingHorizontal && {paddingHorizontal},
  ];
  const buttonTextStyles = [
    styles.buttonText,
    textColor && {color: textColor},
    textSize && {fontSize: textSize},
  ];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={buttonTextStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
