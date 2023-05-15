import React from 'react';
import {View, Image, Text} from 'react-native';
import Back from '../../components/Back';
import styles from './index.styles';
const WishlistScreen = ({wishlistItems}) => {
  return (
    <View>
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
    </View>
  );
};

export default WishlistScreen;
