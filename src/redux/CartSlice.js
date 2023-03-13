import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const {id, name, price} = action.payload;
      const itemExists = state.find(item => item.id === id);

      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({id, name, price, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      const index = state.findIndex(item => item.id === action.payload.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    increaseQuantity: (state, action) => {
      const {id} = action.payload;
      const itemExists = state.find(item => item.id === id);

      if (itemExists) {
        itemExists.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const {id} = action.payload;
      const itemExists = state.find(item => item.id === id);

      if (itemExists) {
        if (itemExists.quantity === 1) {
          const index = state.findIndex(item => item.id === id);
          state.splice(index, 1);
        } else {
          itemExists.quantity--;
        }
      }
    },
  },
});

export const {addItem, removeItem, increaseQuantity, decreaseQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
