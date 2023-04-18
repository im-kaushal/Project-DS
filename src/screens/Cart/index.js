import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
  Alert,
} from 'react-native';

import EmptyCart from '../../assets/svg/EmptyCart';

import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, clear, removeItem} from '../../redux/CartSlice';
import {cartTotalPriceSelector} from '../../redux/Selector';
import CouponCodeForm from '../../components/CouponCode';
import styles from './index.styles';
import Header from '../../components/Header';
import ProductPage from '../Product/ShowProducts';
import CustomIcon from '../../components/Icon';
import Strings from '../../constants/Strings';
import Quantity from '../../components/Quantity';

const CartContainer = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [couponCode, setCouponCode] = useState('');
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.storeItemPrice}>
              ${item.quantity * item.price}
            </Text>
            <Quantity item={item} />
          </View>
        </View>
        <View style={styles.cartItemRemove}>
          <TouchableOpacity
            onPress={() => {
              dispatch(removeItem(item.id));
            }}>
            <CustomIcon name="trash-o" size={20} />
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

                      <TouchableOpacity onPress={AlertItem}>
                        <Text style={styles.checkoutText}>
                          {Strings.clear_cart}
                        </Text>
                      </TouchableOpacity>
                    </View>

                    {/* coupon Code Container */}
                    <CouponCodeForm
                      couponCode={couponCode}
                      setCouponCode={setCouponCode}
                      totalPrice={totalPrice}
                    />

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignSelf: 'stretch',
                      }}>
                      <Button
                        onPress={() =>
                          navigation.navigate('ProductStack', {
                            screen: ProductPage,
                          })
                        }
                        text={Strings.shopping}
                      />

                      <Button
                        text={Strings.checkout}
                        onPress={() => {
                          dispatch(checkout());
                        }}
                      />
                    </View>
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
