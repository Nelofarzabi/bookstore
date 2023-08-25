import { createSlice } from '@reduxjs/toolkit';

const initialeState = [];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialeState,
  reducers: {
    checkStatus: (state, action) => {
      state.categories = action.payload === 'Under construction'
        ? 'Under construction'
        : state.categories;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
