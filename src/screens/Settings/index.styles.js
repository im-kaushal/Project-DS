import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: moderateScale(10),
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.primary,
  },
  dropdownContainer: {
    width: '40%',
  },
  dropdown: {
    backgroundColor: Colors.bg,
    borderColor: Colors.secondary,
    borderWidth: 1,
  },

  dropdownItem: {
    justifyContent: 'flex-start',
  },

  dropdownLabel: {
    fontSize: 16,
    color: Colors.success,
  },
});
