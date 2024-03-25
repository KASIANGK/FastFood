import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../basketSlice" 
import BACKY from '../../../public/design/bmcsmall2.jpg'
import BLACKY from '../../../public/design/bmcblack2.jpg'
import burgers from '../../../public/design/burgerrsw.png'


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
                <img src={burgers}></img>
                {data.map((element, i) => (
                    <div key={i} className="burgers-content">
                        {element.burgers.map((burger, b) => (
                            <div key={b} className="burgers-contenu"
                            style={{ backgroundImage: `url(${BACKY})` }}>
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
