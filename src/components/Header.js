import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DrawerNavigator from '../navigation/DrawerNavigator';
import WishlistScreen from '../screen/Wishlist';

const Header = () => {
  const Navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => Navigation.navigate(DrawerNavigator)}>
        <Icon name="menu-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <View style={styles.searchBox}>
        <TouchableOpacity>
          <Icon name="search-outline" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Icon name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f4511e',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 35,
    flex: 1,
    marginHorizontal: 10,
  },
  searchText: {
    marginLeft: 10,
    color: '#ccc',
  },
});

export default Header;
