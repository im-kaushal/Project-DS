import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/CounterSlice';
import MyCartReducer from '../redux/CartSlice';
import WishlistReducer from './WishlistSlice';
import LoginSlice from './LoginSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: MyCartReducer,
    user: LoginSlice,
    wishlist: WishlistReducer,
  },
});
