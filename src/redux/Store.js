import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../redux/CounterSlice';
import MyCartReducer from '../redux/CartSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    cart: MyCartReducer,
  },
});
