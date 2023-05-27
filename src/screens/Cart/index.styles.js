import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  storeItem: {
    flexDirection: 'row',
    padding: moderateScale(10),
    marginBottom: moderateScale(10),
    marginVertical: moderateScale(5),
    marginHorizontal: moderateScale(5),
    borderColor: Colors.text,
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(5),
    backgroundColor: Colors.background,
    justifyContent: 'center',
  },
  storeItemImg: {
    width: '30%',
    height: moderateScale(100),
    borderRadius: moderateScale(5),
    overflow: 'hidden',
  },
  storeItemImage: {
    width: '100%',
    height: '100%',
  },
  storeItemInfo: {
    width: '70%',
    padding: moderateScale(10),
    justifyContent: 'space-between',
  },
  storeItemTitle: {
    color: Colors.primary,
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  storeItemPrice: {
    marginTop: 10,
    fontSize: moderateScale(18),
    color: Colors.success,
  },
  last: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'space-between',
  },
  addToCart: {
    backgroundColor: 'coral',
    borderRadius: moderateScale(5),
    marginTop: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItemAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cartItemAmountText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  cartItemRemove: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',

    backgroundColor: Colors.error,
    borderRadius: 10,
  },
  cartItemRemoveButton: {
    // marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  cartFooter: {
    justifyContent: 'space-between',
  },
  listHeader: {
    flexDirection: 'row',
    paddingRight: '2%',
    justifyContent: 'flex-end',
    backgroundColor: Colors.background,
  },
  coupon: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  dltIcon: {
    backgroundColor: Colors.error,
    borderRadius: moderateScale(50),
    padding: '0.5%',
  },
  checkoutText: {
    textAlign: 'center',
    color: Colors.success,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    marginHorizontal: 12,
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {justifyContent: 'space-between'},
  emptyCart: {height: moderateScale(650), backgroundColor: Colors.background},
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  last: {flexDirection: 'row', justifyContent: 'space-between'},
});
export default styles;
