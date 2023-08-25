import PropTypes from 'prop-types';
import './styles/bookcard.css';
import { useDispatch } from 'react-redux';
import CircularProgress from './Progress';
import { removeBook } from '../redux/books/booksSlice';

const BookCard = ({
  id, category, title, author, percentValue, chapter,
}) => {
  // const data = useSelector((state) => state.book);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(id));
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
