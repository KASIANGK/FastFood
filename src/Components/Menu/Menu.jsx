import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../../data.json';

function Menu () {
    const { id } = useParams()

    const selectedMenu = data.reduce((foundMenu, restaurant) => {
        const menu = restaurant.menus.find(menu => menu.id === parseInt(id))
        return menu || foundMenu
    }, null)

    if (!selectedMenu) {
        return <div>MENU NOT FOUND</div>
    }

    return (
        <div>
            <h2>{selectedMenu.restaurant}</h2>
            <div key={selectedMenu.id}>
                <p>{selectedMenu.name}</p>
                <img src={selectedMenu.img}/>
                <p>{selectedMenu.ingredients}</p>
            </div>
        </div>
    )
}

export default Menu
