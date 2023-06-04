import { createSlice } from '@reduxjs/toolkit';

const roomSlice = createSlice({
  name: 'user',
  initialState: {
    rooms: null
  },
  reducers: {
    roomsList: (state, action) => {

        state.rooms = action.payload;
    },
    addRoom: (state, action) => {

        state.rooms = [action.payload, ...state.rooms];

      }
  },
});

export const { roomsList, addRoom } = roomSlice.actions;

export default roomSlice.reducer;
