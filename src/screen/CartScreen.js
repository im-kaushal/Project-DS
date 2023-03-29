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
import {useNavigation} from '@react-navigation/native';
import EmptyCart from '../assets/images/emptyCart';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {useDispatch, useSelector} from 'react-redux';
import Colors from '../statics/Colors';

import {increment, decrement, clear, removeItem} from '../redux/CartSlice';
import {cartTotalPriceSelector} from '../redux/Selector';
import Product from './Product';
import styles from '../statics/styles';

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
          <View>
            <View style={styles.cartItemAmount}>
              <TouchableOpacity
                style={{backgroundColor: Colors.primary}}
                onPress={() => {
                  if (item.quantity === 1) {
                    dispatch(removeItem(item.id));

                    console.log('removed');
                    return;
                  } else {
                    dispatch(decrement(item.id));
                  }
                }}>
                <FontAwesomeIcon name="minus" size={25} />
              </TouchableOpacity>
              <Text style={styles.cartItemAmountText}>{item.quantity}</Text>
              <TouchableOpacity
                style={{backgroundColor: Colors.primary}}
                onPress={() => {
                  dispatch(increment(item.id));
                }}>
                <FontAwesomeIcon name="plus" size={25} />
              </TouchableOpacity>
            </View>
            <View style={styles.cartItemRemove}>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeItem(item.id));
                }}
                style={styles.cartItemRemoveButton}>
                <FontAwesomeIcon name="trash-o" size={25} />
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
          <View style={styles.listHeader}>
            <TouchableOpacity onPress={AlertItem}>
              <FontAwesomeIcon
                name="trash-o"
                size={25}
                style={styles.dltIcon}
              />
            </TouchableOpacity>
          </View>
        )}
        ListFooterComponent={() => {
          return (
            <View>
              <View>
                {cart.length === 0 ? (
                  <EmptyCart style={styles.emptyCart} />
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
