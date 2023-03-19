import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addItem(state, {payload}) {
      //   console.log(payload);
      const {id} = payload;

      const find = state.find(item => item.id === id);
      if (find) {
        return state.map(item =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      } else {
        state.push({
          ...payload,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    clearWishlist(state) {
      return [];
    },
  },
});

export const {addItem, removeItem, clearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;
