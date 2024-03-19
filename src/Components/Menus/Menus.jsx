import Navbar from "../Navbar/Navbar";
import data from '../../../data.json';
import { Link } from "react-router-dom";

function Menus () {
    return (
        <div>
            <Navbar />
            <div>
                {data.map((restaurant, i) => (
                    <div key={i}>
                        <h2>{restaurant.restaurant}</h2>
                        {restaurant.menus.map((menu, m) => (
                            <div key={m}>
                                <p>{menu.name}</p>
                                <img src={menu.img}/>
                                <Link to={"/menus/" + menu.id}>
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

export default Menus