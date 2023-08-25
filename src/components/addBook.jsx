import { useState } from 'react';
import './styles/addbook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function AddBook() {
  const [book, setBook] = useState({
    author: '',
    title: '',
    category: '',
    percentValue: 0,
    chapter: 'Introduction',
  });
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.title && book.author && book.category) {
      const newBook = {
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
        percentValue: 0,
        chapter: 'Introduction',
      };
      dispatch(addBook(newBook));
      setBook({
        title: '',
        author: '',
        percentValue: 0,
        chapter: 'Introduction',
      });
    } else {
      const divError = document.querySelector('.divError');
      divError.style.display = 'block';
      setError('Title or Author or Category is missing');
      const show = () => {
        setError('');
        divError.style.display = 'none';
      };
      setTimeout(show, 3000);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="add-new">Add new book</h1>
        <div className="input">
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" value={book.title} placeholder="Title" className="book-title" onChange={handleChange} required />
            <input type="text" name="author" value={book.author} placeholder="Author" className="book-title" onChange={handleChange} required />
            <select name="category" id="" className="input-category" onChange={handleChange}>
              <option>--Select Category--</option>
              <option value="Fiction">Fiction</option>
              <option value="Non Fiction">Non Fiction</option>
            </select>
            <button type="submit" className="add-button">Add book</button>
          </form>
          <div className="divError">
            <p className="error">{error}</p>
          </div>
        </div>
      </div>
    </>
  );
}
