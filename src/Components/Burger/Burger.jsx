import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data.json';

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
        <div>
            <h2>{selectedBurger.restaurant}</h2>
            <div key={selectedBurger.id}>
                <p>{selectedBurger.name}</p>
                <img src={selectedBurger.img}/>
                <p>{selectedBurger.ingredients}</p>
            </div>
        </div>
    )
}

export default Burger
