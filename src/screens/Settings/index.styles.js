import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropDownContainer: {
    flex: 1,
    height: 40,
  },
  dropDown: {
    backgroundColor: Colors.background,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    marginLeft: 70,
  },
  item: {
    // justifyContent: 'flex-start',
    marginLeft: 50,
  },
  dropDownMenu: {
    backgroundColor: Colors.bg,
    borderColor: Colors.success,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
  },
  label1: {
    marginTop: 80,
  },
  label2: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
