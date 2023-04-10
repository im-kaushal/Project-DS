import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../../redux/CartSlice';

import styles from './index.styles';
import Header from '../../../components/Header';

const ProductDetails = ({route}) => {
  const dispatch = useDispatch();
  const item = route.params.item;

  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
    dispatch(addToCart(item));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setInCart(false);
      setQuantity(1);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.view}>
        <Image style={styles.productImage} source={{uri: item.image}} />

        <View style={styles.productDetails}>
          <View>
            <Text style={styles.title}>{item.title}</Text>
          </View>

          <View style={styles.productRar}>
            <Text style={styles.textInfo}>Price: ${item.price.toFixed(2)}</Text>
            <Text style={styles.textInfo}>Rating: {item.rating.rate}</Text>
            <Text style={styles.textInfo}>({item.rating.count} reviews)</Text>
          </View>

          <View>
            <Text style={styles.textInfo}>Description:</Text>
            <Text style={styles.text}>{item.description}</Text>
          </View>

          {inCart ? (
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleDecrement}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={handleIncrement}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.productBtn}
              onPress={handleAddToCart}>
              <Text style={styles.subtitle}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default ProductDetails;
