import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';

export default styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: Colors.primary,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(5),
    margin: moderateScale(10),
    minWidth: moderateScale(60),
    maxWidth: moderateScale(300),
  },
  buttonText: {
    color: Colors.text,
    fontSize: moderateScale(16),
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
  icon: {
    color: Colors.accent,
    marginRight: moderateScale(5),
    fontSize: moderateScale(20),
  },
});
