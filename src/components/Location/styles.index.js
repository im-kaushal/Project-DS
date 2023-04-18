import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
export default styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: Colors.primary,
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
  location: {
    color: Colors.primary,
    fontSize: moderateScale(18),
    textAlign: 'center',
  },
  loading: {
    color: Colors.secondary,
    fontSize: moderateScale(18),
  },
  icon: {
    alignSelf: 'flex-start',
    margin: 20,
  },
});
