import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  Pressable,
  Keyboard,
  Alert,
} from 'react-native';

import OTPInputField from '../../../../components/OtpInput';
import {useNavigation} from '@react-navigation/native';
import {webImgs} from '../../../../constants/Images';
import styles from './index.styles';

const OTPScreen = props => {
  const navigation = useNavigation();

  const [code, setCode] = useState('');
  const [pinReady, setPinReady] = useState(false);
  const MAX_CODE_LENGTH = 6;

  const confirm = props.route.params;

  async function confirmCode() {
    if (code) {
      try {
        console.log(confirm.confirm(code), 'code is here ');
        await confirm.confirm(code);
        navigation.navigate('SignInScreen');
      } catch (error) {
        Alert.alert('Invalid OTP');
      }
    } else {
      Alert.alert('Please enter OTP');
    }
  }

  return (
    <View style={styles.container1}>
      <ImageBackground
        source={webImgs.cartoon}
        style={{
          flex: 1,
        }}
        resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.otpImageContainer}>
            <Image style={styles.otpImage} source={webImgs.cartoon} />
          </View>
          <Text style={styles.title}>Enter OTP?</Text>
          <Text style={styles.subtitle}>
            An 6 digit code has been sent to your mobile number{' '}
          </Text>
          <Pressable onPress={Keyboard.dismiss}>
            <OTPInputField
              setPinReady={setPinReady}
              code={code}
              setCode={setCode}
              maxLength={MAX_CODE_LENGTH}
            />
          </Pressable>

          <TouchableOpacity
            disabled={!pinReady}
            onPress={() => {
              confirmCode();
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonTxt}>Submit</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.resend}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default OTPScreen;
