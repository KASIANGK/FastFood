import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../basketSlice" 
import BLACKY from '../../../public/design/b.jpg'
import './Menus.css'

function Menus() {

    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const dispatch = useDispatch()

    const handleAddToCart = (menu) => {
        dispatch(addToCart({ menu }))
    }

    return (
        <div className="burgers">
            <Navbar />
            <div className="burger-all"
            style={{ backgroundImage: `url(${BLACKY})` }}>
                <h2>OUR SELECTION</h2>
                {data.map((element, i) => (
                    <div key={i} className="burgers-content">
                        {element.menus.map((menu, m) => (
                            <div key={m} className="burgers-contenu">
                                <img src={menu.img} alt={menu.name} />
                                <p>{menu.name}</p>
                                {loggedInUser === true ?
                                    <p>{menu.price}</p>
                                    : null}
                                {loggedInUser === true ?
                                    <button className="btn-add" onClick={() => handleAddToCart(menu)}>ADD</button>
                                    : null}
                                <Link to={"/menus/" + menu.id}>
                                    <button className="btn-infos" role="button">PLUS D'INFOS</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menus
