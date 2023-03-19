import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  Button,
  ActivityIndicator,
} from 'react-native';

/// inbuilt libraries
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
/// custom libraries
import Header from '../components/Header';
import {getFakeProducts} from '../API/Service';
import {Colors} from '../assets/Colors';
import {addToCart} from '../redux/CartSlice';

import {addItem} from '../redux/WishlistSlice';

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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!items.length) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No products found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.container}>
        {/* Condiotional Rendering */}

        {/* {loading ? (
          <Text>Loading...</Text>
        ) : ( */}
        <FlatList
          data={items}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Image style={styles.image} source={{uri: item.image}} />
              <View style={styles.detailsContainer}>
                <View style={styles.tw}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.rar}>
                  <Text style={styles.par}>
                    Price: ${item.price.toFixed(2)}
                  </Text>
                  <Text> Rating: {item.rating.rate} </Text>
                  <Text style={styles.par}>({item.rating.count} reviews)</Text>
                  <TouchableOpacity onPress={() => dispatch(addItem(item))}>
                    <Icon name="heart-outline" size={18} color="#000" />
                  </TouchableOpacity>
                </View>

                {/* Dispatching Action  */}
                <Button
                  style={styles.buttonText}
                  title="Add to Cart"
                  onPress={() => dispatch(addToCart(item))}
                />

                {showDescription && (
                  <Text style={styles.description}>{item.description}</Text>
                )}
                {/* Toggle - LifeCycle Method */}
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setShowDescription(!showDescription)}>
                  <Text style={styles.buttonText}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bg_light,
    marginHorizontal: 2,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: Colors.bg_light,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  rar: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    par: {
      color: Colors.text,
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
  },
  description: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 10,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: Colors.btn,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: Colors.text,
    fontSize: 16,
  },
  tw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductPage;
