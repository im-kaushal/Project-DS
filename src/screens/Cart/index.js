import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  Button,
  Alert,
} from 'react-native';

import EmptyCart from '../../assets/svg/EmptyCart';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';

import {increment, decrement, clear, removeItem} from '../../redux/CartSlice';
import {cartTotalPriceSelector} from '../../redux/Selector';
import styles from './index.styles';
import Header from '../../components/Header';

const CartContainer = ({navigation}) => {
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
          <View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => {
                  dispatch(increment(item.id));
                }}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.cartItemRemove}>
          <TouchableOpacity
            onPress={() => {
              dispatch(removeItem(item.id));
            }}>
            <FontAwesomeIcon name="trash-o" size={20} color={'red'} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Header title="Cart" navigation={navigation} />
      <FlatList
        data={cart}
        renderItem={renderStoreItems}
        keyExtractor={item => item.id}
        ListFooterComponent={() => {
          return (
            <View>
              <View>
                {cart.length === 0 ? (
                  <EmptyCart style={styles.emptyCart} />
                ) : (
                  <View style={styles.checkoutFull}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={styles.checkoutText}>
                        Total: ${totalPrice.toFixed(2)}
                      </Text>
                      <View style={styles.listHeader}>
                        <TouchableOpacity onPress={AlertItem}>
                          <FontAwesomeIcon
                            name="trash-o"
                            size={20}
                            style={styles.dltIcon}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Button
                      title="Checkout"
                      color="#ff5a5f"
                      onPress={() => {
                        dispatch(checkout());
                      }}
                    />
                    <Button
                      onPress={() => navigation.navigate('Product')}
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
