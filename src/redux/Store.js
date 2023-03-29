import {configureStore, combineReducers} from '@reduxjs/toolkit';
import counterReducer from '../redux/CounterSlice';
import MyCartReducer from '../redux/CartSlice';
import WishlistReducer from './WishlistSlice';
import LoginSlice from './LoginSlice';

import {persistReducer, persistStore} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['cart', 'wishlist'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    counter: counterReducer,
    cart: MyCartReducer,
    user: LoginSlice,
    wishlist: WishlistReducer,
  }),
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export {store, persistor};
