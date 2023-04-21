import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from '../../../components/Icon';

import styles from '../../../constants/styles';
import Strings from '../../../constants/Strings';
import {
  addToCart,
  decrement,
  removeItem,
  clear,
} from '../../../redux/CartSlice';

const RenderProducts = ({item, navigation, dispatch}) => {
  const cartProduct = useSelector(state => state.cart);

  const cartItem = cartProduct.find(cartItem => cartItem.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleIncrement = () => {
    dispatch(addToCart(item));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrement(item.id));
    } else {
      dispatch(clear(item));
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.productBox}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductDetails', {item})}>
          <Image style={styles.productImage} source={{uri: item.image}} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.wishlist}
          onPress={() => dispatch(addToCart(item))}>
          <Icon name="heart-o" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.productDetails}>
        <View>
          <Text style={styles.title}>{item.title.slice(0, 25) + '...'}</Text>
        </View>
        <View style={styles.productRar}>
          <Text style={styles.textInfo}>Price: ${item.price.toFixed(2)}</Text>
          <Text style={styles.textInfo}>Rating: {item.rating.rate}</Text>
          <Text style={styles.textInfo}>({item.rating.count} reviews)</Text>
        </View>
        {quantity == 0 ? (
          <TouchableOpacity
            style={styles.productBtn1}
            onPress={handleAddToCart}>
            <Text style={styles.subtitle}>{Strings.add_to_cart}</Text>
          </TouchableOpacity>
        ) : (
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
        )}
      </View>
    </View>
  );
};

export default RenderProducts;
