import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem} from '../redux/CartSlice';

const CartScreen = () => {
  const items = useSelector(state => state.cart.id);
  console.log('🚀 ~ file: CartScreen.js:8 ~ CartScreen ~ items:', items);

  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  const handleRemoveItem = id => {
    dispatch(removeItem);
  };

  return (
    <View>
      <Text>items: {items}</Text>
      <Text>Total: {total}</Text>
      <Button title="Remove Item" onPress={handleRemoveItem} />
    </View>
  );
};
export default CartScreen;
