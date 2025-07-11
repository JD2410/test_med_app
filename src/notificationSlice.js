import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    display: (state) => {
      state.value = true;
    },
    hide: (state) => {
      state.value = false;
    },
  },
});

export const { display, hide } = notificationSlice.actions;
export default notificationSlice.reducer;