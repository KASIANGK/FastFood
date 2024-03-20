import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../basketSlice" 

function Burgers() {

    const loggedInUser = useSelector(state => state.user.loggedInUser)
    const dispatch = useDispatch()

    const handleAddToCart = (burger) => {
        dispatch(addToCart({ burger }))
    }

    return (
        <div>
            <Navbar />
            <div>
                {data.map((element, i) => (
                    <div key={i}>
                        <h2>{element.restaurant}</h2>
                        {element.burgers.map((burger, b) => (
                            <div key={b}>
                                <p>{burger.name}</p>
                                <img src={burger.img} alt={burger.name} />
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
