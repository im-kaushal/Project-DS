import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: Colors.background,
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(15),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(20),
  },
  headerText: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: Colors.text,
  },
  form: {
    width: '80%',
    backgroundColor: Colors.background,
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    alignItems: 'center',
  },
  input: {
    color: 'black',
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: moderateScale(5),
    padding: 10,
    marginVertical: moderateScale(10),
  },
  button: {
    backgroundColor: Colors.accent,
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
    marginTop: moderateScale(10),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
});
export default styles;
