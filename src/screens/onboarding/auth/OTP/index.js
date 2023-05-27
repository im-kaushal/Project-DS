import React, {useState} from 'react';
import {View} from 'react-native';
import OTPInput from 'react-native-otp-forminput';
import ResendOTPButton from '../../../../components/ResendOtp';
import OtpImg from '../../../../assets/svg/OtpImg';
import styles from '../../../../constants/styles';
import Colors from '../../../../constants/Colors';
import {useTranslation} from 'react-i18next';
import CustomButton from '../../../../components/Button';

const OTPScreen = ({navigation, route}) => {
  const [code, setCode] = useState('');
  const {t} = useTranslation();
  const {confirm, phone} = route.params;
  const CODE_LENGTH = 6;

  async function handleVerify({phone}) {
    if (code) {
      try {
        console.log(Object.keys(confirm));
        await confirm.confirm(code);
        navigation.navigate('ResetPassword', (phone = 'phone'));
      } catch (error) {
        alert('Invalid OTP');
        console.log('error', error);
      }
    } else {
      alert(t('enter_otp'));
    }
  }

  return (
    <View style={styles.container}>
      <OtpImg style={styles.img} />

      <OTPInput
        title={t('enter_otp')}
        titleStyle={styles.title}
        subtitle={t('otp_subtitle')}
        subtitleStyle={styles.subtitle}
        type="outline"
        numberOfInputs={CODE_LENGTH}
        cursorColor={Colors.primary}
        borderColor={Colors.primary}
        inputStyle={styles.otpInput}
        onChange={setCode}
      />
      <View>
        <ResendOTPButton phone={phone} confirm={confirm} />
        <CustomButton
          text={t('verify')}
          newStyle={styles.btn}
          onPress={handleVerify}
        />
      </View>
    </View>
  );
};

export default OTPScreen;
