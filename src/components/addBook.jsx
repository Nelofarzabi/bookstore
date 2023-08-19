import './styles/addbook.css';

const AddBook = () => (
  <>
    <div className="container">
      <h1 className="add-new">Add new book</h1>
      <div className="input">
        <form>
          <input type="text" name="addBook" placeholder="Book title" className="book-title" />
          <input type="text" value="Suzanne Collins" className="input-category" disabled />
          <button type="button" className="add-button">Add book</button>
        </form>
      </div>
    </div>
  </>
);

export default AddBook;
