import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.index';

const Alert = ({message, type, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, styles[type]]}>
        <Text style={styles.text}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  onPress: PropTypes.func,
};

export default Alert;
