import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EmptyCart from '../assets/images/emptyCart';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';

import {increment, decrement, clear, removeItem} from '../redux/CartSlice';
import {cartTotalPriceSelector} from '../redux/Selector';
import Product from './Product';

const CartContainer = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const totalPrice = useSelector(cartTotalPriceSelector);

  const AlertItem = () => {
    Alert.alert(
      'Are you sure you want to clear the cart?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => dispatch(clear())},
      ],
      {cancelable: false},
    );
  };

  const renderStoreItems = ({item}) => {
    return (
      <View style={styles.storeItem}>
        <View style={styles.storeItemImg}>
          <Image style={styles.storeItemImage} source={{uri: item.image}} />
        </View>
        <View style={styles.storeItemInfo}>
          <Text style={styles.storeItemTitle}>{item.title}</Text>
          <Text style={styles.storeItemPrice}>
            ${item.quantity * item.price}
          </Text>
          <View style={styles.addToCart}>
            <View style={styles.cartItemAmount}>
              <TouchableOpacity
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));

                    console.log('removed');
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={styles.cartItemAmountText}>{item.quantity}</Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(increment(item.id));
                }}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cartItemRemove}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={styles.cartItemRemoveButton}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={cart}
        renderItem={renderStoreItems}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <View
            style={{
              flexDirection: 'row',
              paddingRight: '3%',
              justifyContent: 'flex-end',
              backgroundColor: '#e09f3e',
            }}>
            <TouchableOpacity onPress={AlertItem}>
              <FontAwesomeIcon name="trash" size={30} color="#00141a" />
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View>
              <View>
                {cart.length === 0 ? (
                  <EmptyCart
                    style={{height: 600, backgroundColor: '#fff3b0'}}
                  />
                ) : (
                  <View style={styles.checkoutFull}>
                    <Text style={styles.checkoutText}>
                      Total: ${totalPrice}
                    </Text>

                    <Button
                      title="Checkout"
                      color="#ff5a5f"
                      onPress={() => {
                        dispatch(checkout());
                      }}
                    />
                    <Button
                      onPress={() => Navigation.navigate(Product)}
                      title="Continue Shopping"
                    />
                  </View>
                )}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const CartScreen = () => {
  return (
    <SafeAreaView>
      <CartContainer />
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  storeItemImg: {
    width: '30%',
    height: 100,
    borderRadius: 5,
    overflow: 'hidden',
  },
  storeItemImage: {
    width: '100%',
    height: '100%',
  },
  storeItemInfo: {
    width: '70%',
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  storeItemPrice: {
    fontSize: 16,
    color: 'red',
  },
  addToCart: {
    backgroundColor: 'coral',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  cartItemAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemRemove: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemRemoveButton: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartFooter: {
    justifyContent: 'space-between',
  },
});
