import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
    percentValue: 64,
    chapter: 'Chapter 17',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
    percentValue: 8,
    chapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Non fiction',
    percentValue: 0,
    chapter: 'Introduction',
  },
];

export const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.item_id !== action.payload),
  },
});

export const { addBook, removeBook, toggleBook } = booksSlice.actions;

export default booksSlice.reducer;
