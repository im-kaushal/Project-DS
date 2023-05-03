import React, {useState} from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import {View} from 'react-native';
import styles from '../../../../constants/styles';
import ResetImage from '../../../../assets/svg/ResetImage';
import {useDispatch, useSelector} from 'react-redux';
import {ResetPassword, adduser} from '../../../../redux/LoginSlice';
import {useTranslation} from 'react-i18next';

const ResetPasswordScreen = ({navigation, route}) => {
  const [newPass, SetNewPass] = useState();
  const [CreatenewPass, SetCreateNewPass] = useState();
  const userData = useSelector(state => state.user);
  const {t} = useTranslation();
  const {phone} = route.params;
  console.log(phone, ' here is Phone Number');

  let currentUser = userData.data.filter(item => item.Number === phone)[0];

  const dispatch = useDispatch();

  const OnSave = () => {
    const newObj = {
      // Email: currentUser.Email,
      Number: currentUser.Number,
      Password: newPass,
    };
    if (newPass === CreatenewPass) {
      Alert.alert('New Password Created');
      dispatch(ResetPassword(newObj)), 'reset';
      console.log('reset', ResetPassword(newObj));
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resetImage}>
        <ResetImage style={styles.img} />
        <Input
          placeholder={t('password_placeholder')}
          onChangeText={SetCreateNewPass}
        />
        <Input
          placeholder={t('confirm_password_placeholder')}
          secureTextEntry
          onChangeText={SetNewPass}
        />
        <Button text="Set Password" onPress={OnSave} />
      </View>
    </View>
  );
};
export default ResetPasswordScreen;
