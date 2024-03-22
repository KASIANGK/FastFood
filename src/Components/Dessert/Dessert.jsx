// import React from 'react';
// import { useParams } from 'react-router-dom';
// import data from '../../../data.json';

// function Dessert () {
//     const { id } = useParams()
//     const selectedDessert = data.reduce((foundDessert, restaurant) => {
//         const dessert = restaurant.burgers.find(dessert => dessert.id === parseInt(id))
//         return dessert || foundDessert
//     }, null)

//     if (!selectedDessert) {
//         return <div>DESSERT NOT FOUND</div>
//     }

//     return (
//         <div>
//             <h2>{selectedDessert.restaurant}</h2>
//             <div key={selectedDessert.id}>
//                 <p>{selectedDessert.name}</p>
//                 <img src={selectedDessert.img}/>
//                 <p>{selectedDessert.ingredients}</p>
//             </div>
//         </div>
//     )
// }

// export default Dessert




import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data.json';
import { Link } from 'react-router-dom';
import BACKY from '../../../public/design/b.jpg'
import BLACKY from '../../../public/design/black.jpg'
import Navbar from '../Navbar/Navbar';
import './Dessert.css'

function Dessert() {
    const { id } = useParams()
    const selectedDessert = data.reduce((foundDessert, restaurant) => {
        const dessert = restaurant.desserts.find(dessert => dessert.id === parseInt(id))
        return dessert || foundDessert
    }, null)

    if (!selectedDessert) {
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
                    <h2>{selectedDessert.restaurant}</h2>
                    <div key={selectedDessert.id} className='product-detail-content'
                    style={{ backgroundImage: `url(${BACKY})` }}>
                        <div className='both'>
                            <div className='pdOne'>
                                <div>
                                    <img src={selectedDessert.img}/>
                                </div>
                                <div>
                                    <p>{selectedDessert.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div key={selectedDessert.id} className='part2'
                    style={{ backgroundImage: `url(${BACKY})` }}>
                        <div className='pdTwo'>
                            <div className='ing'>
                                <p>imgredients : </p>
                                <p>{selectedDessert.ingredients}</p>
                            </div>
                            <div className='btn-burger'>
                                <Link to='/desserts'><button>BACK</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Dessert
