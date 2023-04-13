import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
    marginVertical: moderateScale(8),
  },
  input: {
    fontSize: moderateScale(8),
    color: Colors.secondary,
  },
});
