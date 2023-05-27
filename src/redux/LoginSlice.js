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
      const {email, newPassword} = action.payload;
      const updatedData = state.data.map(user => {
        if (user.Email === email) {
          return {...user, Password: newPassword};
        } else {
          return user;
        }
      });
      return {
        ...state,
        data: updatedData,
        updatedPassword: newPassword,
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
      console.log(updatedUser, 'Data Updated!');
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
