import PropTypes from 'prop-types';
import './styles/bookcard.css';
import { useDispatch } from 'react-redux';
import CircularProgress from './Progress';
import { deleteBook } from '../redux/books/booksSlice';

const BookCard = ({
  id, category, title, author, percentValue, chapter,
}) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBook(id));
    const divError = document.querySelector('.deleteError');
    divError.style.display = 'block';
    divError.innerHTML = `Book with id ${id} deleted successfully`;
    const show = () => {
      divError.style.display = 'none';
    };
    setTimeout(show, 3000);
  };

  return (
    <>
      <div className="card-div">
        <article className="card">
          <div className="content-title">
            <p className="category">{category}</p>
            <h2 className="title">{title}</h2>
            <small className="author">{author}</small>
          </div>
          <div className="actions">
            <button type="button" className="action">Comments</button>
            <span className="actions-line" />
            <button type="button" className="action" onClick={handleDelete}>Remove</button>
            <span className="actions-line" />
            <button type="button" className="action">Edit</button>
          </div>
        </article>
        <div className="current-chapter">
          <div className="progress">
            <CircularProgress />
            <div className="percent">
              <p className="value">
                {percentValue}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
          </div>
          <div className="line" />
          <div className="current">
            <p className="text">Current chapter</p>
            <p className="chapter">{chapter}</p>
            <button type="button" className="update">Update progresse</button>
          </div>
        </div>
      </div>
      <div className="deleteError" />
    </>
  );
};

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentValue: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default BookCard;
