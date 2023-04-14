import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
export default styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: Colors.bg,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    marginVertical: moderateScale(8),
  },
  input: {
    fontSize: moderateScale(15),
    color: Colors.error,
  },
});
