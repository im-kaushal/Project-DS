import {createSlice} from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addWishlistItem: (state, action) => {
      state.push(action.payload);
    },
    removeWishlistItem: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const {addWishlistItem, removeWishlistItem} = wishlistSlice.actions;

export default wishlistSlice.reducer;
