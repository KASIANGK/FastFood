import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
// import logo from '../../assets/TITLE.png';

function Navbar() {

  // useLocation() pour obtenir l'emplacement precis
  const location = useLocation()

  return (
    <div className="navbar">
      <div className="logo-container">
        {/* <img src={logo} /> */}
      </div>
      <ul className="nav-links">
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">HOME</Link>
        </li>
        <li className={location.pathname === '/manga' ? 'active' : ''}>
          <Link to="/menus">MENUS</Link>
        </li>
        <li className={location.pathname === '/characters' ? 'active' : ''}>
          <Link to="/burgers">BURGERS</Link>
        </li>
        <li className={location.pathname === '/characters' ? 'active' : ''}>
          <Link to="/desserts">DESSERTS</Link>
        </li>
        <li className={location.pathname === '/characters' ? 'active' : ''}>
          <Link to="/login">LOG IN</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar