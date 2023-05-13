import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageContainer: {
    alignSelf: 'center',
    marginTop: moderateScale(25),
  },

  cameraIcon: {
    position: 'absolute',
    bottom: moderateScale(0),
    right: moderateScale(10),
  },
  image: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(75),
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    margin: moderateScale(10),
    color: Colors.primary,
  },
  btn: {
    width: moderateScale(100),
    alignSelf: 'center',
  },

  imagePlaceholder: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(50),
    backgroundColor: Colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginBottom: 10,
  },
});

export default styles;
