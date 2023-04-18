import {StyleSheet} from 'react-native';
import React from 'react';
import Empty from '../../assets/svg/Empty';
import {moderateScale} from 'react-native-size-matters';
import Colors from '../../constants/Colors';
const EmptyScreen = () => {
  return <Empty style={styles.container} />;
};

export default EmptyScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignContent: 'center',
    height: undefined,
    aspectRatio: '1.2',
    width: moderateScale(200),
  },
});
