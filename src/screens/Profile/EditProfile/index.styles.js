import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollViewContentContainer: {
    flexGrow: 1,

    alignItems: 'center',
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },

  cameraIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
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
  input: {
    height: 50,
    borderColor: '#A4A4A4',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },

  socialHeading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default styles;
