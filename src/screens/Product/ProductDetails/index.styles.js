import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  view: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: 'center',
  },
  icon: {
    margin: moderateScale(15),
  },
  productImage: {
    height: moderateScale(280),

    resizeMode: 'contain',
  },
  productDetails: {
    marginTop: moderateScale(12),
  },
  title: {
    color: Colors.primary,
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
  },
  productRar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(18),
  },
  textInfo: {
    color: Colors.text,
    fontSize: moderateScale(16),
    marginRight: moderateScale(10),
    fontWeight: 'bold',
  },
  text: {
    color: Colors.text,

    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
    marginBottom: moderateScale(10),
  },
  productBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    alignSelf: 'flex-start',
  },
  subtitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: Colors.text,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  quantityButton: {
    backgroundColor: Colors.accent,
    width: moderateScale(30),
    height: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    marginHorizontal: moderateScale(20),
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
