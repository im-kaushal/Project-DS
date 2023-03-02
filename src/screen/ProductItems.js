import React from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {addToCart} from '../store/actions/CartAction';

const ProductItem = ({product, addToCart}) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
  );
};

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductItem);
