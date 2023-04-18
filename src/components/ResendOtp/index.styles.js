import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  timer: {
    marginTop: moderateScale(10),
    color: Colors.secondary,
    fontSize: moderateScale(16),
  },
});
