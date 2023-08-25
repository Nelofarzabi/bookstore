import { useSelector } from 'react-redux';
import BookCard from './bookCard';
import AddBook from './addBook';

export default function Book() {
  const data = useSelector((state) => state.book);

  return (
    <>
      <ul>
        {
          data.map((article) => (
            <li key={article.item_id}>
              <BookCard
                id={article.item_id}
                category={article.category}
                title={article.title}
                author={article.author}
                chapter={article.chapter}
                percentValue={article.percentValue}
              />
            </li>
          ))
        }
      </ul>
      <hr />
      <AddBook />
    </>
  );
}
