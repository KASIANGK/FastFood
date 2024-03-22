import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../basketSlice" 
import BLACKY from '../../../public/design/b.jpg'
import './Burgers.css'

function Burgers() {

    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const dispatch = useDispatch()

    const handleAddToCart = (burger) => {
        dispatch(addToCart({ burger }))
    }

    return (
        <div className="burgers">
            <Navbar />
            <div className="burger-all"
            style={{ backgroundImage: `url(${BLACKY})` }}>
                <h2>OUR SELECTION</h2>
                {data.map((element, i) => (
                    <div key={i} className="burgers-content">
                        {element.burgers.map((burger, b) => (
                            <div key={b} className="burgers-contenu">
                                <img src={burger.img} alt={burger.name} />
                                <p>{burger.name}</p>
                                {loggedInUser === true ?
                                    <p>{burger.price}</p>
                                    : null}
                                {loggedInUser === true ?
                                    <button className="btn-add" onClick={() => handleAddToCart(burger)}>ADD</button>
                                    : null}
                                <Link to={"/burgers/" + burger.id}>
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

export default Burgers
