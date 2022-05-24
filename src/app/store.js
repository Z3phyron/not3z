import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import noteSlice from '../features/note/noteSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice,
   note: noteSlice
  },
});
