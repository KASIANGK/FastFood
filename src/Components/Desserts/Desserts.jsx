import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";

function Desserts () {
    return (
        <div>
            <Navbar />
            <div>
                {data.map((restaurant, i) => (
                    <div key={i}>
                        <h2>{restaurant.restaurant}</h2>
                        {restaurant.desserts.map((dessert, d) => (
                            <div key={d}>
                                <p>{dessert.name}</p>
                                <img src={dessert.img}/>
                                <Link to={"/desserts/" + dessert.id}>
                                    <button className="btn" role="button">PLUS D'INFOS</button>  
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
