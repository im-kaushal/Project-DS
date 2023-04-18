import {createSlice} from '@reduxjs/toolkit';

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    image: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
  },
  reducers: {
    updateImage: (state, action) => {
      state.image = action.payload;
    },
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
    updateContactNumber: (state, action) => {
      state.contactNumber = action.payload;
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const {
  updateImage,
  updateFirstName,
  updateLastName,
  updateContactNumber,
  updateAddress,
} = userProfileSlice.actions;

export default userProfileSlice.reducer;
