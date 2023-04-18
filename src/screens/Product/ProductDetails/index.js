import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, decrement, clear} from '../../../redux/CartSlice';

import styles from './index.styles';
import CustomIcon from '../../../components/Icon';
import Strings from '../../../constants/Strings';
import Colors from '../../../constants/Colors';

const ProductDetails = ({route, navigation}) => {
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
      dispatch(decrement(item.id));
    } else {
      dispatch(clear(item));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={navigation.goBack}>
        <CustomIcon name="chevron-left" size={25} color={Colors.primary} />
      </TouchableOpacity>

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
            <Text style={styles.textInfo}>{Strings.description}</Text>
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
              <Text style={styles.subtitle}>{Strings.add_to_cart}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default ProductDetails;
