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

  imgBg: {
    // marginLeft: moderateScale(30),
    padding: moderateScale(10),
  },
  text: {
    fontSize: moderateScale(16),
    color: Colors.secondary,
    marginBottom: moderateScale(2),
    textAlign: 'justify',
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: moderateScale(12),
  },
  subtitle: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    color: Colors.text,
    textAlign: 'center',
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
  },
  logo: {
    width: moderateScale(50),
    height: moderateScale(60),
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
    height: moderateScale(110),
    width: moderateScale(110),
    borderRadius: moderateScale(100),
    margin: moderateScale(15),
  },
  user: {
    color: Colors.error,
    fontSize: moderateScale(20),
    marginBottom: moderateScale(15),
    marginLeft: moderateScale(10),
    textTransform: 'uppercase',
  },

  list: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: moderateScale(10),
  },
  //badge
  badge: {
    backgroundColor: Colors.primary,
    height: 20,
    minWidth: 5,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
