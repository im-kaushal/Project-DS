import {StyleSheet} from 'react-native';
import Colors from '../../../../constants/Colors';

export default styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.accent,
    fontSize: 23,
    marginVertical: 10,
  },
  subtitle: {
    fontWeight: '500',
    color: Colors.primary,
  },
  textinput: {
    borderBottomColor: Colors.bg,
    borderBottomWidth: 1,
    fontSize: 20,
    paddingVertical: 10,
    marginVertical: 30,
    color: Colors.primary,
    backgroundColor: '#f5f4f2',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 60,
    alignItems: 'center',
  },
  buttonTxt: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  resend: {
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: 'bold',
  },
  otpImage: {
    height: '50%',
    width: '50%',
  },
  otpImageContainer: {alignItems: 'center', marginBottom: '-35%'},
});
