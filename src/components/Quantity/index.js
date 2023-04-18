import {TouchableOpacity, Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, removeItem} from '../../redux/CartSlice';
import styles from './index.styles';
import CustomIcon from '../Icon';
import Colors from '../../constants/Colors';
const Quantity = ({quantity, item}) => {
  const cartProduct = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleIncrement = () => {
    dispatch(addToCart(item));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrement(item.id));
    } else {
      dispatch(clear(item));
    }
  };

  return (
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
        <CustomIcon name="minus" color={Colors.accent}></CustomIcon>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{item.quantity}</Text>
      <TouchableOpacity
        style={styles.quantityButton}
        onPress={() => {
          dispatch(increment(item.id));
        }}>
        <CustomIcon name="plus" color={Colors.accent} />
      </TouchableOpacity>
    </View>
  );
};

export default Quantity;
