import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const Product = () => {
  const [data, setData] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const [loading, setLoading] = useState(true); // added `loading` state

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(response => setData(response.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Image style={styles.image} source={{uri: item.image}} />
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.rar}>
                  <Text style={styles.par}>
                    Price: ${item.price.toFixed(2)}
                  </Text>
                  <Text> Rating: {item.rating.rate} </Text>
                  <Text style={styles.par}>({item.rating.count} reviews)</Text>
                </View>
                {showDescription && (
                  <Text style={styles.description}>{item.description}</Text>
                )}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c4aead',
    marginHorizontal: 2,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#fff',
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
      color: '#000',
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 5,
    },
  },
  description: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Product;
