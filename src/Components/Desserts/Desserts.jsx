import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../basketSlice" 
import BLACKY from '../../../public/design/b.jpg'
import './Desserts.css'

function Desserts() {

    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const dispatch = useDispatch()

    const handleAddToCart = (dessert) => {
        dispatch(addToCart({ dessert }))
    }

    return (
        <div className="burgers">
            <Navbar />
            <div className="burger-all"
            style={{ backgroundImage: `url(${BLACKY})` }}>
                <h2>OUR SELECTION</h2>
                {data.map((element, i) => (
                    <div key={i} className="burgers-content">
                        {element.desserts.map((dessert, d) => (
                            <div key={d} className="burgers-contenu">
                                <img src={dessert.img} alt={dessert.name} />
                                <p>{dessert.name}</p>
                                {loggedInUser === true ?
                                    <p>{dessert.price}</p>
                                    : null}
                                {loggedInUser === true ?
                                    <button className="btn-add" onClick={() => handleAddToCart(dessert)}>ADD</button>
                                    : null}
                                <Link to={"/desserts/" + dessert.id}>
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

export default Desserts
