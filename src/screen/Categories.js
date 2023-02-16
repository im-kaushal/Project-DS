import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Products from '../api/Products';
import Product from './Product';
import route from '@react-navigation/native';

const Categories = ({navigation, route}) => {
  const id = Products.id;
  console.log(id);

  const selectedProduct = Products.find(element => {
    return id === element.id;
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.productContainer}>
        <View>
          <Image
            style={styles.cardImage}
            source={selectedProduct.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.mainHeader}>{selectedProduct.title}</Text>

        <Text style={styles.description}>{selectedProduct.description}</Text>

        <Text style={styles.description}>{selectedProduct.course1}</Text>

        <Text style={styles.description}>{selectedProduct.course2}</Text>

        <Text style={styles.description}>{selectedProduct.course3}</Text>

        <View style={styles.buttonContainer}>
          <Text style={styles.price}> {selectedProduct.price} </Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate(Product)}>
            <Text style={styles.buttonText}> Buy Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
  },
  productContainer: {
    // height: "50%",
    // display: "flex",
    padding: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    textAlign: 'center',
    borderRadius: 5,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },

  cardImage: {
    width: '100%',
    display: 'flex',
    alignSelf: 'center',
    height: undefined,
    aspectRatio: 1,
  },

  mainHeader: {
    fontSize: 22,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    paddingTop: 10,
    paddingBottom: 15,
    fontFamily: 'JosefinSans_500Medium',
    textAlign: 'center',
  },

  subHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    paddingBottom: 15,
    fontFamily: 'JosefinSans_500Medium',
    textAlign: 'center',
  },

  description: {
    textAlign: 'center',
    fontSize: 16,
    color: '#7d7d7d',
    paddingBottom: 20,
    fontFamily: 'JosefinSans_300Light',
    lineHeight: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  price: {
    backgroundColor: '#344055',
    color: '#eee',
    paddingVertical: 10,
    paddingHorizontal: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 1,
    borderTopLeftRadius: 1,
    fontSize: 20,
    fontFamily: 'JosefinSans_400Regular',
    textAlign: 'center',
  },
  buttonStyle: {
    backgroundColor: '#809fff',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#eee',
    fontFamily: 'JosefinSans_400Regular',
  },
});

export default Categories;
