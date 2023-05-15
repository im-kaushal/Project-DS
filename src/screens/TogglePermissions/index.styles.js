import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: moderateScale(100),
  },
  header: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
    color: Colors.primary,
  },
  permissionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    width: '100%',
  },
  permissionText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
