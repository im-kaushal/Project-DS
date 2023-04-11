import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, Button} from 'react-native';
import {addItem, removeItem, clearWishlist} from '../../redux/WishlistSlice';
import Product from '../Product/ShowProducts';
const WishlistScreen = () => {
  const items = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(items.id));
  };

  const handleRemoveItem = itemId => {
    dispatch(removeItem(itemId));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <>
      <Text>Your Wishlist</Text>
      {items.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Button title="Remove" onPress={() => handleRemoveItem(item.id)} />
        </View>
      ))}
      <Button title="Clear Wishlist" onPress={handleClearWishlist} />
      <Button title="Add Item" onPress={handleAddItem} />
    </>
  );
};

export default WishlistScreen;
