import { Link } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => (
  <>
    <nav className="navbar">
      <div className="menu">
        <h1>
          <Link to="/" className="bookstore">
            {' '}
            Bookstore
            {' '}
            <span className="cms">cms</span>
          </Link>
        </h1>
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Books</Link>
          </li>
          <li className="nav-link">
            <Link to="categories">Categories</Link>
          </li>
        </ul>
      </div>
      <div className="person">
        <span className="material-symbols-outlined icon">
          person
        </span>
      </div>
    </nav>
  </>
);

export default Navbar;
