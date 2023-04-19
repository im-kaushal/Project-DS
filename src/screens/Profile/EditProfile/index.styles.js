import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollViewContentContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: moderateScale(15),
  },

  cameraIcon: {
    position: 'absolute',
    bottom: moderateScale(0),
    right: moderateScale(12),
  },
  image: {
    width: moderateScale(150),
    height: moderateScale(150),
    borderRadius: moderateScale(75),
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialHeading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginBottom: 10,
  },
});

export default styles;
