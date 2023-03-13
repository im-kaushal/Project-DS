import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem} from '../redux/CartSlice';

const CartScreen = () => {
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);
  const dispatch = useDispatch();

  const handleRemoveItem = itemId => {
    dispatch(removeItem(itemId));
  };

  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };

  return (
    <View>
      <Text>Total: {total}</Text>
      <Button title="Remove Item" onPress={handleRemoveItem} />
    </View>
  );
};
export default CartScreen;
