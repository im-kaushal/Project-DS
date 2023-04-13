import React from 'react';
import {TouchableOpacity, Linking, Platform} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ContactButton = ({type, value}) => {
  const handlePress = () => {
    let url;

    if (type === 'email') {
      url = `mailto:${value}`;
    } else if (type === 'phone') {
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
      <FontAwesome
        name={type === 'email' ? 'envelope-o' : 'phone'}
        size={30}
        color="#007AFF"
      />
    </TouchableOpacity>
  );
};

export default ContactButton;
