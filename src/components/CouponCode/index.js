import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../Button';
import {useDispatch} from 'react-redux';
import {cartDiscountedPriceSelector} from '../../redux/Selector';
import Input from '../Input';

const CouponCodeForm = ({totalPrice}) => {
  const [couponCode, setCouponCode] = useState('');

  const dispatch = useDispatch();

  const handleApplyCoupon = () => {
    if (couponCode == 'COUPON1' || 'COUPON2') {
      dispatch(cartDiscountedPriceSelector(totalPrice));

      onApplyCoupon(couponCode);
    }
  };
  return (
    <View style={styles.container}>
      <Input
        newStyles={{width: 120}}
        placeholder="Coupon Code"
        value={couponCode}
        onChangeText={setCouponCode}
      />
      <Button
        newStyle={{backgroundColor: 'green'}}
        text="Apply"
        onPress={handleApplyCoupon}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10,
  },
});

export default CouponCodeForm;
