import React, {useEffect, useState, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../../statics/styles';
import {getFakeProducts} from '../../../API/Service';
import {addToCart} from '../../../redux/CartSlice';

const ProductPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getFakeProducts();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleIncrement = useMemo(
    () => () => {
      setQuantity(quantity + 1);
      if (!inCart) {
        dispatch(addToCart(items));
      }
    },
    [quantity, inCart, dispatch, items],
  );

  const handleDecrement = () => {
    setQuantity(quantity > 1 ? quantity - 1 : 1);
    setInCart(quantity > 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <View style={styles.productBox}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetails', {item})}>
                  <Image
                    style={styles.productImage}
                    source={{uri: item.image}}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.wishlist}
                  onPress={() => dispatch(addToCart(item))}>
                  <Icon name="heart-outline" size={20} color="#000" />
                </TouchableOpacity>
              </View>
              <View style={styles.productDetails}>
                <View>
                  <Text style={styles.title}>
                    {item.title.slice(0, 25) + '...'}
                  </Text>
                </View>
                <View style={styles.productRar}>
                  <Text style={styles.textInfo}>
                    Price: ${item.price.toFixed(2)}
                  </Text>
                  <Text style={styles.textInfo}>
                    Rating: {item.rating.rate}
                  </Text>
                  <Text style={styles.textInfo}>
                    ({item.rating.count} reviews)
                  </Text>
                </View>
                {!inCart ? (
                  <TouchableOpacity
                    style={styles.productBtn1}
                    onPress={() => {
                      dispatch(addToCart(item));
                      setInCart(true);
                    }}>
                    <Text style={styles.subtitle}>Add to Cart</Text>
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
          )}
        />
      )}
    </SafeAreaView>
  );
};
export default ProductPage;
