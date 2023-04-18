import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';

export default styles = StyleSheet.create({
  quantityContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  quantityButton: {
    backgroundColor: Colors.secondary,
    width: moderateScale(20),
    height: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(7),
  },
  quantityText: {
    marginHorizontal: moderateScale(30),
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
