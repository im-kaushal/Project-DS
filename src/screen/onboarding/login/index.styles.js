import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../../statics/Colors';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(30),
    marginBottom: moderateScale(20),
  },
  error: {
    color: Colors.error,
    marginBottom: moderateScale(10),
  },
  forgotPassword: {
    marginTop: moderateScale(20),
    color: Colors.accent,
    textDecorationLine: 'underline',
  },
});
