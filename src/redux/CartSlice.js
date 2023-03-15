import {createSlice} from '@reduxjs/toolkit';

const MyCartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToMyCart: (state, action) => {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push({
          id: action.payload.id,
          price: action.payload.price,

          title: action.payload.title,
        });
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
    },

    removeMyCartItem: (state, action) => {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
      } else {
        state[myIndex].qty = state[myIndex].qty - 1;
      }
    },

    deleteMyCartItem: (state, action) => {
      return (state = state.filter(item => {
        item.id != action.payload;
      }));
    },
  },
});

export const {addProductToMyCart, removeMyCartItem, deleteMyCartItem} =
  MyCartSlice.actions;

export default MyCartSlice.reducer;
