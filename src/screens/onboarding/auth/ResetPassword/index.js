import React, {useState} from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import {View, Alert} from 'react-native';
import styles from '../../../../constants/styles';
import ResetImage from '../../../../assets/svg/ResetImage';
import {useDispatch, useSelector} from 'react-redux';
import {ResetPassword} from '../../../../redux/LoginSlice';
import {useTranslation} from 'react-i18next';

const ResetPasswordScreen = ({navigation, route}) => {
  const [newPass, setNewPass] = useState('');
  const [createNewPass, setCreateNewPass] = useState('');
  const userData = useSelector(state => state.user);
  const {t} = useTranslation();
  const {phone} = route.params;

  const dispatch = useDispatch();

  const currentUser = userData.data.find(item => item.Number === phone);

  const onSave = () => {
    if (newPass === createNewPass) {
      const updatedUser = {
        ...currentUser,
        Password: newPass,
      };
      dispatch(ResetPassword(updatedUser));
      Alert.alert('New Password Created');
      navigation.navigate('LoginScreen');
    } else {
      Alert.alert('Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resetImage}>
        <ResetImage style={styles.img} />
        <Input
          placeholder={t('password_placeholder')}
          onChangeText={setCreateNewPass}
        />
        <Input
          placeholder={t('confirm_password_placeholder')}
          secureTextEntry
          onChangeText={setNewPass}
        />
        <Button text="Set Password" onPress={onSave} />
      </View>
    </View>
  );
};
export default ResetPasswordScreen;
