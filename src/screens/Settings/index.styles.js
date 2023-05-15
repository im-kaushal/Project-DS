import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: moderateScale(10),
    alignItems: 'stretch',
  },
  menuContainer: {marginHorizontal: 20, marginTop: 20},

  label: {
    marginLeft: 20,
    fontSize: 16,
    color: Colors.primary,
    fontWeight: 'bold',
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
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});
