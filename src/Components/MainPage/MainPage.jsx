import Navbar from "../Navbar/Navbar"
import data from '../../../data.json'
import Carousel from "../Carousel/Carousel"

function MainPage() {
    return (
        <div>
            <Navbar />
            <div>
                <Carousel></Carousel>
            </div>
            <div>
                {data.map((element, i) => (
                    <div key={i}>
                        <h2>{element.restaurant}</h2>
                        {element.burgers.map((burger, b) => (
                            <div key={b}>
                                <p>{burger.name}</p>
                                <img src={burger.img} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainPage
