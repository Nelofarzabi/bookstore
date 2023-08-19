import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './styles/layout.css';

const Layout = () => (
  <>
    <div className="body">
      <Navbar />
      <Outlet />
    </div>
  </>
);

export default Layout;
