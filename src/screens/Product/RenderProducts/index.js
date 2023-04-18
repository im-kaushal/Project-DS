import {Text, View, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from '../../../components/Icon';
import {addToCart} from '../../../redux/CartSlice';
import styles from '../../../constants/styles';
import Strings from '../../../constants/Strings';
import Quantity from '../../../components/Quantity';

const RenderProducts = ({item, navigation, dispatch}) => {
  const cartProduct = useSelector(state => state.cart);

  const quantity = cartProduct.length;

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <View style={styles.productBox}>
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ProductStack', {
              screen: 'ProductDetails',
              params: {
                item,
              },
            })
          }>
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
          <Quantity item={item} />
        )}
      </View>
    </View>
  );
};

export default RenderProducts;
