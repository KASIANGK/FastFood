import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data.json';

function Dessert () {
    const { id } = useParams()
    const selectedDessert = data.reduce((foundDessert, restaurant) => {
        const dessert = restaurant.burgers.find(dessert => dessert.id === parseInt(id))
        return dessert || foundDessert
    }, null)

    if (!selectedDessert) {
        return <div>DESSERT NOT FOUND</div>
    }

    return (
        <div>
            <h2>{selectedDessert.restaurant}</h2>
            <div key={selectedDessert.id}>
                <p>{selectedDessert.name}</p>
                <img src={selectedDessert.img}/>
                <p>{selectedDessert.ingredients}</p>
            </div>
        </div>
    )
}

export default Dessert
