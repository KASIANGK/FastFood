import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data.json';
import banner from '../../../public/design/s.jpg'
import bgBurger from '../../../public/design/bg_yellow_two.jpg'
import './Burger.css'
import { Link } from 'react-router-dom';
import bgOne from '../../../public/design/pres.png'
// import bgTwo from '../../../public/design/bs2.png'
import BACKY from '../../../public/design/b.jpg'
import BLACKY from '../../../public/design/black.jpg'
import Navbar from '../Navbar/Navbar';

function Burger() {
    const { id } = useParams()
    const selectedBurger = data.reduce((foundBurger, restaurant) => {
        const burger = restaurant.burgers.find(burger => burger.id === parseInt(id))
        return burger || foundBurger
    }, null)

    if (!selectedBurger) {
        return <div>BURGER NOT FOUND</div>
    }

    return (
        <div className='product-detail-container'>
            <div className='product-detail'>
                <Navbar></Navbar>
                {/* <div className='product-detail-img'>
                    <img src={banner} className='img-banner'></img>
                </div> */}
            </div>
                <div className='pd-content'
                style={{ backgroundImage: `url(${BLACKY})` }}>
                    <h2>{selectedBurger.restaurant}</h2>
                    <div key={selectedBurger.id} className='product-detail-content'
                    style={{ backgroundImage: `url(${BACKY})` }}>
                        <div className='both'>
                            <div className='pdOne'>
                                <div>
                                    <img src={selectedBurger.img}/>
                                </div>
                                <div>
                                    <p>{selectedBurger.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={selectedBurger.id} className='part2'
                    style={{ backgroundImage: `url(${BACKY})` }}>
                        <div className='pdTwo'>
                            <div className='ing'>
                                <p>imgredients : </p>
                                <p>{selectedBurger.ingredients}</p>
                            </div>
                            <div className='btn-burger'>
                                <Link to='/burgers'><button>BACK</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Burger
