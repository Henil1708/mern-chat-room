import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import userSlice from './slices/userSlice';
import roomSlice from './slices/roomSlice';

// const rootReducer = combineReducers({
//     user: userSlice,
// });

const store = configureStore({
    reducer: {
        user: userSlice,
        room: roomSlice
    }
});

export default store;