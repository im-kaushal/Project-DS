import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';

export default styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(5),
    margin: moderateScale(10),
    minWidth: 60,
    maxWidth: 300,
  },
  buttonText: {
    color: Colors.text,
    fontSize: moderateScale(16),
    fontWeight: 600,
    textAlign: 'center',
  },
  icon: {
    color: Colors.text,
    fontSize: moderateScale(20),
  },
});
