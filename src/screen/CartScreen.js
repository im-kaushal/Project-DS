import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const CART_ITEMS = [
  {
    id: '1',
    name: 'Product 1',
    price: 19.99,
    quantity: 2,
  },
  {
    id: '2',
    name: 'Product 2',
    price: 29.99,
    quantity: 1,
  },
];

const CartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const handleRemoveItem = item => {
    dispatch({type: 'REMOVE_ITEM', payload: item});
  };
  const renderCartItem = ({item}) => (
    <View style={styles.cartItemContainer}>
      <Text style={styles.cartItemName}>{item.name}</Text>
      <Text style={styles.cartItemPrice}>${item.price.toFixed(2)}</Text>
      <Text style={styles.cartItemQuantity}>Qty: {item.quantity}</Text>
    </View>
  );

  const renderTotal = () => {
    const total = CART_ITEMS.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return (
      <View style={styles.totalContainer}>
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

        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CART_ITEMS}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        ListFooterComponent={renderTotal}
      />
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemPrice: {
    fontSize: 16,
  },
  cartItemQuantity: {
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginTop: 16,
  },
  totalLabel: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
