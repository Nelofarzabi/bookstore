import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appId = '5k0uBLMEGPJdWJ7OqK54';

const initialState = {
  isLoading: false,
  books: [],
  error: null,
};

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const { data } = await axios.get(`${url}${appId}/books`);
  return data;
});

export const postBook = createAsyncThunk('books/postBook', async (book, thunkAPI) => {
  try {
    const res = await axios.post(`${url}${appId}/books`, book);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error?.data?.message || 'Something went wrong!',
    );
  }
});

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${url}${appId}/books/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.data?.message || 'Something went wrong!',
      );
    }
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => state.filter((book) => book.item_id !== action.payload),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        const newState = { ...state, isLoading: false };
        const resObject = action.payload;
        const newBooksArr = [];
        Object.keys(resObject).forEach((id) => {
          const bookObj = resObject[id][0];
          bookObj.item_id = id;
          newBooksArr.push(bookObj);
        });
        newState.books = newBooksArr;
        return newState;
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.isLoading = false;
        state.books = [];
        state.error = action.error.message;
      })
      .addCase(postBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
