
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data.json';
import { Link } from 'react-router-dom';
import BACKY from '../../../public/design/b.jpg'
import BLACKY from '../../../public/design/black.jpg'
import Navbar from '../Navbar/Navbar';
import './Menu.css'

function Menu() {
    const { id } = useParams()
    const selectedMenu = data.reduce((foundMenu, restaurant) => {
        const menu = restaurant.menus.find(menu => menu.id === parseInt(id))
        return menu || foundMenu
    }, null)

    if (!selectedMenu) {
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
                    <h2>{selectedMenu.restaurant}</h2>
                    <div key={selectedMenu.id} className='product-detail-content'
                    style={{ backgroundImage: `url(${BACKY})` }}>
                        <div className='both'>
                            <div className='pdOne'>
                                <div>
                                    <img src={selectedMenu.img}/>
                                </div>
                                <div>
                                    <p>{selectedMenu.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={selectedMenu.id} className='part2'
                    style={{ backgroundImage: `url(${BACKY})` }}>
                        <div className='pdTwo'>
                            <div className='ing'>
                                <p>imgredients : </p>
                                <p>{selectedMenu.ingredients}</p>
                            </div>
                            <div className='btn-burger'>
                                <Link to='/menus'><button>BACK</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Menu
