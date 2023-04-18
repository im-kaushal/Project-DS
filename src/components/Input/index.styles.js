import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
export default styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.bg,
    fontSize: moderateScale(15),
    color: Colors.text,
    width: '90%',

    borderRadius: moderateScale(10),
    margin: moderateScale(8),
    maxWidth: moderateScale(300),
    minWidth: moderateScale(250),
  },
});
