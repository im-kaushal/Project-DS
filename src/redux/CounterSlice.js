import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    increment: (state, action) => {
      state.push(action.payload);
    },
    decrement: (state, action) => {
      state.pop(action.payload);
    },
  },
});

export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
