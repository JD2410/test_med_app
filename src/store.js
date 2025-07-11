import { configureStore } from '@reduxjs/toolkit';
import notificationDisplay from './notificationSlice'

export const store = configureStore({
  reducer: {
    notification: notificationDisplay,
  },
});