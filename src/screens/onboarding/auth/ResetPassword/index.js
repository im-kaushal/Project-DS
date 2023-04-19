import React, {useState} from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Strings from '../../../../constants/Strings';
import {View} from 'react-native';
import styles from '../../../../constants/styles';
import ResetImage from '../../../../assets/svg/ResetImage';
import {useDispatch, useSelector} from 'react-redux';
import {ResetPassword, adduser} from '../../../../redux/LoginSlice';

const ResetPasswordScreen = ({navigation, route}) => {
  const [newPass, SetNewPass] = useState();
  const [CreatenewPass, SetCreateNewPass] = useState();
  const userData = useSelector(state => state.user);
  console.log(
    '🚀 ~ file: index.js:15 ~ ResetPasswordScreen ~ userData:',
    userData,
  );

  const {phone} = route.params;
  console.log(phone, ' here is Phone Number');

  let currentUser = userData.data.filter(item => item.Number === phone)[0];
  console.log(
    '🚀 ~ file: index.js:20 ~ ResetPasswordScreen ~ currentUser:',
    currentUser,
  );

  const dispatch = useDispatch();

  const OnSave = () => {
    const newObj = {
      Email: currentUser.Email,
      Number: currentUser.Number,
      Password: newPass,
    };
    if (newPass === CreatenewPass) {
      Alert.alert('New Password Created');
      dispatch(ResetPassword(newObj)), 'reset';
      console.log('reset', ResetPassword(newObj));
      navigation.navigate('AuthStack', {screen: LoginScreen});
    }
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ResetImage style={styles.img} />
        <Input
          placeholder={Strings.password_placeholder}
          onChangeText={SetCreateNewPass}
        />
        <Input
          placeholder={Strings.password_placeholder}
          secureTextEntry
          onChangeText={SetNewPass}
        />
        <Button text="Set Password" onPress={OnSave} />
      </View>
    </View>
  );
};
export default ResetPasswordScreen;
