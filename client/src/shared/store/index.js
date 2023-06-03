import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import userSlice from './slices/userSlice';

// const rootReducer = combineReducers({
//     user: userSlice,
// });

const store = configureStore({
    reducer: {
        user: userSlice
    }
});

export default store;