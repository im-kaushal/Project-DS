import {createSlice} from '@reduxjs/toolkit';
import {webImgs} from '../constants/Paths';

const ProfileSlice = createSlice({
  name: 'profile',
  initialState: {
    ProfileImage: webImgs.avatar,
  },
  reducers: {
    ProfileImage: (state, action) => {
      state.ProfileImage = action.payload;
      console.log(ProfileImage);
    },
  },
});

export const {ProfileImage} = ProfileSlice.actions;
export default ProfileSlice.reducer;
