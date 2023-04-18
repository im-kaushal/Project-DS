import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  header: {
    fontWeight: 'bold',
    color: Colors.primary,
    fontSize: 20,
  },
});
export default styles;
