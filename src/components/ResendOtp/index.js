import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import styles from './index.styles';
import {useTranslation} from 'react-i18next';

const ResendOTPButton = ({handleVerify}) => {
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
        <Button title={t('send_otp')} onPress={handleVerify} />
      ) : (
        <Button
          title={t('resend_otp')}
          disabled={disabled}
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