import {StyleSheet} from 'react-native';
import Colors from '../../../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
  description: {
    fontSize: moderateScale(16),
    marginBottom: moderateScale(20),
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: moderateScale(50),
    backgroundColor: Colors.bg,
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    marginBottom: moderateScale(20),
  },
  message: {
    marginTop: moderateScale(10),
    textAlign: 'center',
  },
  success: {
    color: Colors.success,
  },
  error: {
    color: Colors.error,
  },
});
