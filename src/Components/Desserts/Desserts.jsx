import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../basketSlice" 
import BACKY from '../../../public/design/bmcsmall2.jpg'
import BLACKY from '../../../public/design/bmcblack2.jpg'
import desserts from '../../../public/design/desserts.png'


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
                <img src={desserts}></img>
                {data.map((element, i) => (
                    <div key={i} className="burgers-content">
                        {element.desserts.map((dessert, d) => (
                            <div key={d} className="burgers-contenu"
                            style={{ backgroundImage: `url(${BACKY})` }}>
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
