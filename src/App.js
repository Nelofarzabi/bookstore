import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Book from './components/Books';
import Categories from './components/Categories';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Book />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
