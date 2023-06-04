import { createSlice } from '@reduxjs/toolkit';
import user from '../../../utils/services/user';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null
  },
  reducers: {
    setUser: (state, action) => {
        state.user = action.payload;
    },
    removeUser: (state) => {
        state = {user:null};

        localStorage.clear()

    }
  },
});

export const { setUser, removeUser } = userSlice.actions;

// Async action to fetch user data
export const fetchUser = async (dispatch) => {
    try {
        // get user details 
        const userDetails = await user.getMe(); 

        dispatch(setUser(userDetails));
    } catch (error) {
      
    }
};

export default userSlice.reducer;
