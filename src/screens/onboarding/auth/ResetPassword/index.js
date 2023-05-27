import React, {useState} from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import {Text, View, Alert} from 'react-native';
import styles from '../../../../constants/styles';
import ResetImage from '../../../../assets/svg/ResetImage';
import {useDispatch} from 'react-redux';
import {ResetPassword} from '../../../../redux/LoginSlice';
import {useTranslation} from 'react-i18next';

const ResetPasswordScreen = ({navigation, route}) => {
  const [email, setEmail] = useState('tkaushalkr.09@gmail.com');
  const [newPassword, setNewPassword] = useState('');

  const {t} = useTranslation();
  const {phone} = route.params;

  const dispatch = useDispatch();

  // const currentUser = userData.data.find(item => item.Number === phone);

  const onSave = () => {
    dispatch(ResetPassword({email, newPassword}));
    Alert.alert(t('password_updated'));
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.resetImage}>
        <ResetImage style={styles.img} />
        <Text style={styles.title}></Text>
        <Input placeholder={t('email')} onChangeText={setEmail} />
        <Input
          placeholder={t('password_placeholder')}
          secureTextEntry
          onChangeText={setNewPassword}
        />
        <Button text={t('password_set')} onPress={onSave} />
      </View>
    </View>
  );
};
export default ResetPasswordScreen;
