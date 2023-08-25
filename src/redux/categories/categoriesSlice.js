import { createSlice } from '@reduxjs/toolkit';

const initialState = []; // Corrected the spelling of 'initialState'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState, // Using the corrected initialState
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
