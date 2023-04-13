import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: Colors.primary,
  },
  input: {
    backgroundColor: Colors.bg,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(16),
    marginVertical: 8,
    color: Colors.secondary,
  },
  messageInput: {
    height: moderateScale(300),
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: Colors.accent,
    borderRadius: moderateScale(10),
    padding: moderateScale(16),
    alignItems: 'center',
    marginTop: moderateScale(16),
  },
  sendButtonText: {
    color: Colors.primary,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  headerImage: {
    height: '40%',
    width: '100%',
  },
  icons: {
    marginBottom: '5',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
