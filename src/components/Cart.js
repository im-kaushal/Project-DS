import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const handleRemoveItem = item => {
    dispatch({type: 'REMOVE_ITEM', payload: item});
  };

  return (
    <View>
      <Text>Cart</Text>
      {items.map(item => (
        <View key={item.id}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
          <Button title="Remove" onPress={() => handleRemoveItem(item)} />
        </View>
      ))}
      <Button
        title="Clear Cart"
        onPress={() => dispatch({type: 'CLEAR_CART'})}
      />
    </View>
  );
};

export default Cart;
