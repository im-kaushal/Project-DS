import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Strings from '../../constants/Strings';
import styles from './index.styles';
const ResendOTPButton = () => {
  const [showButton, setShowButton] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);

  const handleButtonPress = () => {
    setShowButton(false);
    setShowTimer(true);
    setDisabled(true);
    setRemainingTime(60);

    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      setDisabled(false);
      setShowButton(true);
      setShowTimer(false);
    }, 60000);
  };

  return (
    <View style={styles.container}>
      {showButton ? (
        <Button title={Strings.send_otp} onPress={handleButtonPress} />
      ) : (
        <Button
          title={Strings.resend_otp}
          disabled={disabled}
          onPress={handleButtonPress}
        />
      )}
      {showTimer && (
        <Text style={styles.timer}>
          {Strings.resend_otp} in {remainingTime} seconds
        </Text>
      )}
    </View>
  );
};

export default ResendOTPButton;
