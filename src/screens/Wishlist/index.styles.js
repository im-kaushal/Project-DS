import {StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import {moderateScale} from 'react-native-size-matters';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: moderateScale(350),
    height: moderateScale(350),
    marginTop: moderateScale(650),
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '58%',
    backgroundColor: Colors.background,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    padding: 10,
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: Colors.primary,
  },
});
