import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Back from '../../components/Back';
const WishlistScreen = ({wishlistItems}) => {
  return (
    <>
      <Back />
      <View style={styles.container}>
        {/* {wishlistItems.length === 0 ? ( */}
        <View style={styles.emptyContainer}>
          <Image
            source={require('../../assets/images/wishlist.png')}
            style={styles.emptyImage}
          />
          <Text style={styles.emptyText}>Your Wishlist is empty!</Text>
        </View>
        {/* ) : ( */}
        {/* <View style={styles.itemsContainer}>
        {/* Render Wishlist items */}

        {/* {wishlistItems.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={{uri: item.image}} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>${item.price}</Text>
          </View>
        ))}
      {/* </View> */}
        {/* )} */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#aaa',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: '48%',
    backgroundColor: '#fff',
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
    color: '#888',
  },
});

export default WishlistScreen;
