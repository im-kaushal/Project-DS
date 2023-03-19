import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/CounterSlice';
import MyCartReducer from '../redux/CartSlice';
import WishlistReducer from './WishlistSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: MyCartReducer,
    wishlist: WishlistReducer,
  },
});
