import React from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Strings from '../../../../constants/Strings';
import {View} from 'react-native';
import styles from '../../../../constants/styles';
import ResetImage from '../../../../assets/svg/ResetImage';
const ResetPassword = () => {
  const setPassword = () => {
    console.log('file: index.js:7 ~ ResetPassord');
  };

  return (
    <View style={styles.container}>
      <ResetImage style={styles.img} />
      <Input placeholder={Strings.email_placeholder} />
      <Input
        placeholder={Strings.password_placeholder}
        secureTextEntry
        onChangeText={setPassword}
        // value={password}
      />
      <Button text="Set Password" />
    </View>
  );
};
export default ResetPassword;
