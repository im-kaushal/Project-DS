import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from './Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: moderateScale(15),
  },
  subtitle: {
    fontSize: moderateScale(20),
    color: Colors.text,
    textAlign: 'center',
    marginBottom: moderateScale(10),
  },
  button: {
    backgroundColor: Colors.secondary,
    borderRadius: moderateScale(8),
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
    height: moderateScale(40),
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
    backgroundColor: Colors.bg,
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
});

export default styles;
