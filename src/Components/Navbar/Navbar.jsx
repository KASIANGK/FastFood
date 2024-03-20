// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import './Navbar.css';
// import Basket from "../Basket/Basket";
// import { useDispatch } from "react-redux";


// function Navbar() {
//   const location = useLocation();
//   const loggedInUser = useSelector(state => state.user.loggedInUser);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logoutUser()); // Déclenche la déconnexion de l'utilisateur lorsqu'il clique sur "Log Out"
//   };
  

//   return (
//     <div className="navbar">
//       <div className="logo-container">
//         {/* Votre logo */}
//       </div>
//       <ul className="nav-links">
//         <li className={location.pathname === '/' ? 'active' : ''}>
//           <Link to="/">HOME</Link>
//         </li>
//         <li className={location.pathname === '/manga' ? 'active' : ''}>
//           <Link to="/menus">MENUS</Link>
//         </li>
//         <li className={location.pathname === '/characters' ? 'active' : ''}>
//           <Link to="/burgers">BURGERS</Link>
//         </li>
//         <li className={location.pathname === '/characters' ? 'active' : ''}>
//           <Link to="/desserts">DESSERTS</Link>
//         </li>
//         <li className={location.pathname === '/login' ? 'active' : ''}>
//           {loggedInUser ? (
//             <>
//               <span>Welcome {loggedInUser.username}</span>
//               <button onClick={handleLogout}>Log Out</button> {/* Affiche le bouton "Log Out" lorsque l'utilisateur est connecté */}
//             </>
//           ) : (
//             <Link to="/login">LOG IN</Link>
//           )}
//         </li>
//         {loggedInUser ? <Basket /> : null}
//       </ul>
      
//     </div>
//   )
// }

// export default Navbar;



// Navbar.jsx

import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './Navbar.css';
import Basket from "../Basket/Basket";
import { logoutUser } from "../../userSlice";

function Navbar() {
  const location = useLocation();
  const loggedInUser = useSelector(state => state.user.loggedInUser)
  // const loggedIn = useSelector(state => state.user.loggedIn)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <div className="navbar">
      <div className="logo-container">
      </div>
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
              <button onClick={handleLogout}>LOG OUT</button> 
            </>
          ) : (
            <Link to="/login">LOG IN</Link>
          )}
        </li>
        {loggedInUser ? <Basket /> : null} 
      </ul>
    </div>
  )
}

export default Navbar
