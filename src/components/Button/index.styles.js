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
  },
  buttonText: {
    color: Colors.text,
    fontSize: moderateScale(16),
    textAlign: 'center',
    marginLeft: moderateScale(10),
  },
  icon: {
    color: Colors.text,
    fontSize: moderateScale(20),
  },
});
