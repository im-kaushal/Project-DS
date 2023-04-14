import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    padding: moderateScale(10),
  },
});
