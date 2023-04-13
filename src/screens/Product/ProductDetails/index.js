import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeItem, clear} from '../../../redux/CartSlice';

import styles from './index.styles';

const ProductDetails = ({route}) => {
  const dispatch = useDispatch();
  const item = route.params.item;

  const cartProduct = useSelector(state => state.cart);

  const cartItem = cartProduct.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleIncrement = () => {
    dispatch(addToCart(item));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(clear(item));
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* <Header /> */}
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

          {quantity != 0 ? (
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
