import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";

function Burgers () {
    return (
        <div>
            <Navbar />
            <div>
                {data.map((restaurant, i) => (
                    <div key={i}>
                        <h2>{restaurant.restaurant}</h2>
                        {restaurant.burgers.map((burger, b) => (
                            <div key={b}>
                                <p>{burger.name}</p>
                                <img src={burger.img}/>
                                <Link to={"/burgers/" + burger.id}>
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

export default Burgers
