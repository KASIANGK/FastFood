import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../basketSlice" 
import BLACKY from '../../../public/design/bmcsmall2.jpg'
import BACKY from '../../../public/design/bmcblack2.jpg'
import desserts from '../../../public/design/desserts.png'


import './Desserts.css'

function Desserts() {

    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const dispatch = useDispatch()

    const handleAddToCart = (dessert) => {
        dispatch(addToCart({ dessert }))
    }

    return (
        <div className="desserts">
            <Navbar />
            <div className="desserts-all"
            style={{ backgroundImage: `url(${BLACKY})`,
            backgroundSize: 'cover' }}>
                <img src={desserts}></img>
                {data.map((element, i) => (
                    <div key={i} className="desserts-content">
                        {element.desserts.map((dessert, d) => (
                            <div key={d} className="desserts-contenu"
                            style={{ backgroundImage: `url(${BACKY})`,
                            backgroundSize: 'cover' }}>
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
