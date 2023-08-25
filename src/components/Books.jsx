import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BookCard from './bookCard';
import AddBook from './addBook';
import { fetchBook } from '../redux/books/booksSlice';

export default function Book() {
  const { books } = useSelector((state) => state.books);
  const { isLoading } = useSelector((state) => state.books.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, [books, dispatch]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <BookCard
              id={book.item_id}
              category={book.category}
              title={book.title}
              author={book.author}
              chapter="Introduction"
              percentValue={0}
            />
          </li>
        ))}
      </ul>
      <hr />
      <AddBook />
    </>
  );
}
