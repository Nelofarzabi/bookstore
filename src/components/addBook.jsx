import { useState } from 'react';
import './styles/addbook.css';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { postBook } from '../redux/books/booksSlice';

export default function AddBook() {
  const [book, setBook] = useState({
    author: '',
    title: '',
    category: '',
  });
  const [error, setError] = useState('');
  const [success, setsuccess] = useState('');

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
      };
      dispatch(postBook(newBook));
      setBook({
        title: '',
        author: '',
        category: '',
      });
      const divSuccess = document.querySelector('.divSuccess');
      divSuccess.style.display = 'block';
      setsuccess('Book added successfully');
      const showSuccess = () => {
        setsuccess('');
        divSuccess.style.display = 'none';
      };
      setTimeout(showSuccess, 3000);
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
            <button type="button" className="add-button" onClick={handleSubmit}>Add book</button>
          </form>
          <div className="divSuccess">
            <p className="success">{success}</p>
          </div>
          <div className="divError">
            <p className="error">{error}</p>
          </div>
        </div>
      </div>
    </>
  );
}
