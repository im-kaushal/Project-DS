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
import styles from '../statics/styles';
import Header from '../components/Header';
import {getFakeProducts} from '../API/Service';

import {addToCart} from '../redux/CartSlice';

///component
const ProductPage = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();

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

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!items.length) {
    return (
      <View style={styles.activityIndicator}>
        <Text>No products found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        {/* Condiotional Rendering */}

        {/* {loading ? (
          <Text>Loading...</Text>
        ) : ( */}
        <FlatList
          data={items}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <View style={styles.productBox}>
              <View>
                <Image style={styles.productImage} source={{uri: item.image}} />
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

                {/* Dispatching Action  */}

                <TouchableOpacity
                  style={styles.productBtn1}
                  onPress={() => dispatch(addToCart(item))}>
                  <Text style={styles.subtitle}>Add to Cart</Text>
                </TouchableOpacity>
                {showDescription && (
                  <Text style={styles.text}>{item.description}</Text>
                )}
                {/* Toggle - LifeCycle Method */}
                <TouchableOpacity
                  style={styles.productBtn2}
                  onPress={() => setShowDescription(!showDescription)}>
                  <Text style={styles.subtitle}>
                    {showDescription ? 'Hide' : 'Show'} Description
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductPage;
