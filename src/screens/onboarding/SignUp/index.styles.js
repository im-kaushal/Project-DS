import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../../constants/Colors';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(10),
  },
  title: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: moderateScale(30),
    marginBottom: moderateScale(20),
  },
  img: {
    height: '30%',
    width: '100%',
  },
  error: {
    color: Colors.error,
    marginBottom: moderateScale(10),
  },
});
