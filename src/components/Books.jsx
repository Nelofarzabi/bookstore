import BookCard from './bookCard';
import data from '../data';
import AddBook from './addBook';

const articles = (article) => (
  <BookCard
    category={article.category}
    title={article.title}
    author={article.author}
    percentValue={article.percentValue}
    chapter={article.chapter}
  />
);

const Book = () => (
  <>
    {
      data.map(articles)
    }
    <hr />
    <AddBook />
  </>
);

export default Book;
