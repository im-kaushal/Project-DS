import {configureStore, combineReducers} from '@reduxjs/toolkit';
import profileSlice from './profileSlice';
import CartReducer from '../redux/CartSlice';
import LoginReducer from './LoginSlice';
import {persistReducer, persistStore} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart', 'wishlist'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    cart: CartReducer,
    user: LoginReducer,
    profile: profileSlice,
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
