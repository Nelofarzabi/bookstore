import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});

export const { addBook, removeBook, toggleBook } = booksSlice.actions;

export default booksSlice.reducer;
