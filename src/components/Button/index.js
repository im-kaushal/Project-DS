import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from '../Icon';
import styles from './index.styles';

const CustomButton = ({newStyle, text, onPress, icon}) => {
  let iconComponent;

  switch (icon) {
    case 'back':
      iconComponent = <Icon name="arrow-left" size={25} />;
      break;
    case 'notification':
      iconComponent = <Icon name="bell" size={25} />;
      break;
    case 'go':
      iconComponent = <Icon name="arrow-right" size={25} />;
      break;
    case 'login':
      iconComponent = <Icon name="sign-in" size={25} />;
      break;
    case 'signup':
      iconComponent = <Icon name="user-plus" size={25} />;
      break;
    case 'forgot':
      iconComponent = <Icon name="question-circle" size={25} />;
      break;
    case 'signup':
      iconComponent = <Icon name="user-plus" size={25} />;
      break;
    case 'signup':
      iconComponent = <Icon name="user-plus" size={25} />;
    case 'edit':
      iconComponent = <Icon name="edit" size={25} />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <TouchableOpacity style={[styles.button, newStyle]} onPress={onPress}>
      <View style={styles.icon}>{iconComponent}</View>

      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
