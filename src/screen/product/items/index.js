import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

/// inbuilt libraries
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
/// custom libraries
import styles from '../../../statics/styles';

import {getFakeProducts} from '../../../API/Service';

import {addToCart} from '../../../redux/CartSlice';

///component
const ProductPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  //button(+/-)
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);

  // handle incrementing product quantity
  // handle incrementing product quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    if (!inCart) {
      dispatch(addToCart(item));
    }
  };

  // handle decrementing product quantity
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setInCart(false); // set inCart to false if quantity becomes 1
    }
  };

  const Navigation = useNavigation(); // React Navigation hook

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getFakeProducts(); // API call to get product data
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // render loading spinner if products are still being fetched
  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

  // render text if no products are found
  if (!items.length) {
    return (
      <View style={styles.activityIndicator}>
        <Text>No Products Found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <FlatList
            data={items}
            keyExtractor={({id}) => id.toString()}
            renderItem={({item}) => (
              <View style={styles.productBox}>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      Navigation.navigate('ProductDetails', {item})
                    }>
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
                    <Text style={styles.title}>{item.title}</Text>
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
          {!isLoading && !items.length && (
            <View style={styles.activityIndicator}>
              <Text>No Products Found</Text>
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default ProductPage;
