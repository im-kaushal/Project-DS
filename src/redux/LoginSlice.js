import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    adduser(state, action) {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    },

    ResetPassword(state, action) {
      console.log(
        'password ... reset',
        state.data.map(item => {
          if (item.Email === action.payload.Email) {
            return action.payload;
          }
          return item;
        }),
      );
      return {
        ...state,
      };
    },
    updateUserDetails(state, action) {
      const {firstName, lastName, email, contactNumber, city} = action.payload;
      const user = state.data[0];

      const updatedUser = {
        ...user,
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        ContactNumber: contactNumber,
        City: city,
      };
      console.log(updatedUser, 'myLog');
      console.log(state);
      let data = [...state.data];
      let userDetail = {...data[0]};
      let finalData = {...userDetail, ...updatedUser};
      data[0] = {...finalData};
      return {...state, data};
    },
  },
});

export const {adduser, ResetPassword, updateUserDetails} = loginSlice.actions;
export default loginSlice.reducer;
