import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: {
    cart: rootReducer,
  },
});

export default store;
