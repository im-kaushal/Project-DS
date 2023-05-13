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

import {useTranslation} from 'react-i18next';
import EmptyCart from '../../assets/svg/EmptyCart';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {clear, removeItem} from '../../redux/CartSlice';
import {cartTotalPriceSelector} from '../../redux/Selector';
import CouponCodeForm from '../../components/CouponCode';
import styles from './index.styles';
import Header from '../../components/Header';
import {sendCheckoutNotification} from '../../utils/Notifications';
import CustomIcon from '../../components/Icon';
import {useNavigation} from '@react-navigation/native';
import Quantity from '../../components/Quantity';

const CartContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const [couponCode, setCouponCode] = useState('');
  const totalPrice = useSelector(cartTotalPriceSelector);
  const {t} = useTranslation();
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
      <Header
        title={t('cart')}
        navigation={navigation}
        showHeartIcon={true}
        showBellIcon={false}
      />
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
                        {t('total')}: ${totalPrice.toFixed(2)}
                      </Text>

                      <TouchableOpacity onPress={AlertItem}>
                        <Text style={styles.checkoutText}>
                          {t('clear_cart')}
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
                        onPress={() => navigation.navigate('Product')}
                        text={t('shopping')}
                      />

                      <Button
                        text={t('checkout')}
                        onPress={() => {
                          sendCheckoutNotification();
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
