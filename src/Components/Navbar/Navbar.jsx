import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './Navbar.css';
import Basket from "../Basket/Basket";
import { logoutUser } from "../../userSlice";
import { useEffect } from "react";
import logo from '../../../public/design/logo.png'

function Navbar() {
  const location = useLocation();
  const loggedInUser = useSelector(state => state.user.loggedInUser)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }


  useEffect(()=>{
    console.log(loggedInUser);
  },[])

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} className="logo"/>
        </div>
        <div className="navbar-content">
          <ul className="nav-links">
            <li className={location.pathname === '/' ? 'active' : ''}>
              <Link to="/">HOME</Link>
            </li>
            <li className={location.pathname === '/manga' ? 'active' : ''}>
              <Link to="/menus">MENUS</Link>
            </li>
            <li className={location.pathname === '/burgers' ? 'active' : ''}>
              <Link to="/burgers">BURGERS</Link>
            </li>
            <li className={location.pathname === '/desserts' ? 'active' : ''}>
              <Link to="/desserts">DESSERTS</Link>
            </li>
            <li className={location.pathname === '/login' ? 'active' : ''}>
              {loggedInUser ? (
                <>
                  <span>Welcome</span>
                  <Link to="/"><button onClick={handleLogout}>LOG OUT</button></Link>
                </>
              ) : (
                <Link to="/login">LOG IN</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-basket">
        {loggedInUser === true ? <Basket></Basket> : null}
      </div>
    </div>
  )
}

export default Navbar
