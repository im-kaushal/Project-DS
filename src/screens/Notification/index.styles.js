import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
export default styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  noNotificationsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noNotificationsImage: {
    width: moderateScale(400),
    height: moderateScale(400),
    marginBottom: moderateScale(10),
  },
  noNotificationsText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
