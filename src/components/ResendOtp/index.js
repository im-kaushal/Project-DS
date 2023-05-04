import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './index.styles';
import {useTranslation} from 'react-i18next';
import Button from '../Button';
const ResendOTPButton = () => {
  const [showButton, setShowButton] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);
  const {t} = useTranslation();

  const handleResend = () => {
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
        <Button text={t('send_otp')} onPress={handleResend} />
      ) : (
        <Button
          text={t('resend_otp')}
          newStyle={disabled}
          onPress={handleResend}
        />
      )}
      {showTimer && (
        <Text style={styles.timer}>
          {t('resend_otp')} in {remainingTime} seconds
        </Text>
      )}
    </View>
  );
};

export default ResendOTPButton;
