import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: '50%',
    width: '70%',
  },
  title: {
    color: Colors.primary,
    fontSize: moderateScale(30),
    fontWeight: '600',
    fontFamily: 'PlayfairDisplay-Bold',
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
  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  space: {
    width: moderateScale(0),
  },
});
