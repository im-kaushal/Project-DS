import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {connect} from 'react-redux';
import {removeFromCart} from '../store/actions/CartAction';

const CartScreen = ({cartItems, removeFromCart}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart:</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      ) : (
        <>
          {cartItems.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
              <Button title="Remove" onPress={() => removeFromCart(item.id)} />
            </View>
          ))}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>
              ${cartItems.reduce((total, item) => total + item.price, 0)}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyCart: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 18,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 20,
  },
});

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
  };
};

const mapDispatchToProps = {
  removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);
