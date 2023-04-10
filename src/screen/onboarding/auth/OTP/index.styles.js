import {StyleSheet} from 'react-native';
import Colors from '../../../../statics/Colors';
import {moderateScale} from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  input: {
    width: '80%',
    height: moderateScale(50),
    backgroundColor: Colors.bg,
    borderRadius: moderateScale(10),
    padding: moderateScale(5),
    marginBottom: moderateScale(20),
  },
});

export default styles;
