import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {clear} from '../redux/CartSlice';

export const AlertItem = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist);
  Alert.alert(
    'Are you sure you want to remove all items ?',
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
