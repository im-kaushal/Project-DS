import React from 'react';
import {TouchableOpacity, Linking, Platform} from 'react-native';
import styles from './index.styles';
import CustomIcon from '../Icon';
const ContactButton = ({name, value}) => {
  const handlePress = () => {
    let url;

    if (name === 'email') {
      url = `mailto:${value}`;
    } else if (name === 'phone') {
      url = `tel:${value}`;
    }

    if (Platform.OS === 'ios') {
      Linking.canOpenURL(url).then(supported => {
        if (!supported) {
          console.log(`Unable to open ${url} on this device`);
        } else {
          return Linking.openURL(url);
        }
      });
    } else if (Platform.OS === 'android') {
      Linking.openURL(url).catch(err => {
        console.log(`Error opening ${url}: ${err}`);
      });
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <CustomIcon
        style={styles.btn}
        name={name === 'email' ? 'envelope-o' : 'phone'}
        size={20}
      />
    </TouchableOpacity>
  );
};

export default ContactButton;
