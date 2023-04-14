import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from '../Icon';
import styles from './index.styles';

const CustomButton = ({text, onPress, icon}) => {
  let iconComponent;

  switch (icon) {
    case 'back':
      iconComponent = <Icon name="arrow-left" size={25} color="black" />;
      break;
    case 'notification':
      iconComponent = <Icon name="bell" size={25} color="black" />;
      break;
    case 'go':
      iconComponent = <Icon name="arrow-right" size={25} color="black" />;
      break;
    case 'login':
      iconComponent = <Icon name="sign-in" size={25} color="black" />;
      break;
    case 'signup':
      iconComponent = <Icon name="user-plus" size={25} color="black" />;
      break;
    case 'forgot':
      iconComponent = <Icon name="question-circle" size={25} color="black" />;
      break;
    case 'signup':
      iconComponent = <Icon name="user-plus" size={25} color="black" />;
      break;
    case 'signup':
      iconComponent = <Icon name="user-plus" size={25} color="black" />;
      break;
    default:
      iconComponent = null;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconComponent}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
