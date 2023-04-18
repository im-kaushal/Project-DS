import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background,
    padding: 20,
  },
  scrollContainer: {
    justifyContent: 'center',
    flexGrow: 1,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: Colors.primary,
  },
  // input: {
  //   backgroundColor: Colors.bg,
  //   borderRadius: moderateScale(10),
  //   paddingHorizontal: moderateScale(16),
  //   paddingVertical: moderateScale(16),
  //   marginVertical: 8,
  //   color: Colors.secondary,
  // },
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
    alignSelf: 'center',
    height: '30%',
    width: '100%',
  },

  popupContainer: {
    flexDirection: 'row',
    alignContent: 'space-between',

    justifyContent: 'space-between',
    alignSelf: 'baseline',
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    alignItems: 'center',
    // zIndex: 100,
  },
});
