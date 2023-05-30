import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  view: {
    justifyContent: 'center',
    alignContent: 'space-between',
  },
  img: {height: '55%', width: '100%'},
  resetImage: {justifyContent: 'center', alignItems: 'center'},
  imgBg: {
    // marginLeft: moderateScale(30),
    padding: moderateScale(10),
  },
  text: {
    fontSize: moderateScale(16),
    color: Colors.secondary,
    marginBottom: moderateScale(2),
    textAlign: 'justify',
    fontFamily: 'Inter-Regular',
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: moderateScale(12),
    fontFamily: 'PlayfairDisplay-Bold',
  },
  subtitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
    fontFamily: 'PlayfairDisplay-SemiBold',
    // marginBottom: moderateScale(10),
  },
  button: {
    margin: 10,
    backgroundColor: Colors.secondary,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: Colors.text,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'PlayfairDisplay-SemiBold',
  },
  logo: {
    width: moderateScale(50),
    height: moderateScale(50),
    resizeMode: 'contain',
  },
  landingImage: {
    height: '65%',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: moderateScale(5),
    paddingHorizontal: moderateScale(10),
  },
  landingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(16),
    paddingTop: moderateScale(10),
    paddingBottom: moderateScale(10),
    backgroundColor: Colors.background,
    elevation: 3,
  },
  landingFooter: {
    justifyContent: 'space-between',
    //alignItems: 'center',
    marginBottom: moderateScale(16),
  },
  signUpButton: {
    marginHorizontal: moderateScale(20),
    backgroundColor: Colors.primary,
    padding: moderateScale(10),
    borderRadius: 40,
  },
  activityIndicator: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  productBox: {
    backgroundColor: Colors.background,
    marginHorizontal: moderateScale(2),
    marginBottom: moderateScale(15),
    borderRadius: moderateScale(10),
    shadowColor: Colors.accent,
    shadowOffset: {
      width: moderateScale(2),
      height: moderateScale(2),
    },
    shadowOpacity: moderateScale(0.25),
    shadowRadius: moderateScale(3.8),
    elevation: moderateScale(5),
  },
  productDetails: {
    padding: 20,
  },

  productImage: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productRar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wishlist: {
    position: 'absolute',
    top: moderateScale(2),
    right: moderateScale(5),
    backgroundColor: Colors.bg,
    padding: moderateScale(8),
    borderRadius: moderateScale(100),
  },
  textInfo: {
    color: Colors.text,
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginBottom: moderateScale(5),
    fontFamily: 'Inter-Regular',
  },
  productBtn: {
    backgroundColor: Colors.primary,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    alignSelf: 'flex-start',
  },
  productBtn1: {
    backgroundColor: Colors.success,
    borderRadius: moderateScale(10),
    padding: moderateScale(2),
    fontSize: moderateScale(16),
    textAlign: 'center',
  },
  productBtn2: {
    backgroundColor: Colors.warning,
    borderRadius: moderateScale(10),
    padding: moderateScale(2),
    textAlign: 'center',
  },
  quantityContainer: {
    justifyContent: 'center',
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
    marginHorizontal: moderateScale(80),
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Colors.primary,
  },

  splashImage: {
    justifyContent: 'center',
    width: moderateScale(250),
    height: moderateScale(250),
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },

  avatar: {
    height: moderateScale(120),
    width: moderateScale(120),
    borderRadius: moderateScale(100),
    marginHorizontal: 50,
    marginTop: moderateScale(20),
  },
  user: {
    color: Colors.error,
    fontSize: moderateScale(20),
    marginBottom: moderateScale(15),
    marginLeft: moderateScale(10),
  },
  imgDrawer: {
    height: moderateScale(180),
  },

  list: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: moderateScale(10),
  },
  //badge
  badge: {
    backgroundColor: Colors.primary,
    height: moderateScale(20),
    minWidth: moderateScale(5),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpInput: {
    color: Colors.text,
  },
  otp: {
    width: '100%',
    height: moderateScale(190),
    marginLeft: moderateScale(20),
    marginBottom: moderateScale(30),
  },
  btn: {
    width: moderateScale(150),
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default styles;
