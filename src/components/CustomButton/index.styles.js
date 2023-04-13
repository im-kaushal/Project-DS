import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';

export default styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent,
    paddingVertical: moderateScale(24),
    paddingHorizontal: moderateScale(24),
    borderRadius: moderateScale(24),
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.background,
    fontSize: 18,
  },
});
