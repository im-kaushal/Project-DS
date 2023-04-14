import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
  },
  imgStyle: {
    width: moderateScale(100),
    height: moderateScale(130),
    borderRadius: moderateScale(90),
    marginTop: moderateScale(20),
  },
  mainHeader: {
    fontSize: moderateScale(35),
    color: Colors.primary,
    fontWeight: 'bold',
  },
  paraStyle: {
    fontSize: moderateScale(18),
    color: Colors.text,
    paddingBottom: moderateScale(20),
  },
  minparaStyle: {
    fontSize: moderateScale(20),
    color: Colors.secondary,
  },

  aboutLayout: {
    backgroundColor: Colors.bg,
    paddingHorizontal: moderateScale(30),
    borderRadius: moderateScale(20),
  },
  subHeader: {
    fontSize: moderateScale(20),
    color: Colors.text,
    fontWeight: 'bold',
    marginVertical: moderateScale(18),
    alignSelf: 'center',
  },
  aboutPara: {
    color: Colors.text,
    fontSize: moderateScale(18),

    lineHeight: moderateScale(24),
    textAlign: 'justify',
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconStyle: {
    width: '100%',
    height: moderateScale(30),
    aspectRatio: 1,
    marginBottom: moderateScale(20),
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: 'transparent',
    zIndex: 2,
  },
  cameraImage: {
    width: 40,
    height: 40,
  },
});
export default styles;
