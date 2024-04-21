// carousel random 
import React, { useState, useEffect } from 'react';
import './Carousel.css';
import data from '../../../data.json';
import bgOne from '../../../public/design/way29.png'
import bag from '../../../public/design/18.png'
import TEST from '../../../public/design/storm11.png'
import sweet from '../../../public/design/city3.jpg'

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [randomMenuIndex, setRandomMenuIndex] = useState(0)
  const [randomBurgerIndex, setRandomBurgerIndex] = useState(0)
  const [randomDessertIndex, setRandomDessertIndex] = useState(0)
  const [menus, setMenus] = useState([])
  const [burgers, setBurgers] = useState([])
  const [desserts, setDesserts] = useState([])
  

  useEffect(() => {
    // division donnees pour les differentes categories (menus, burgers, desserts)
    const menusData = data.map(item => item.menus[getRandomIndex(item.menus)])
    const burgersData = data.map(item => item.burgers[getRandomIndex(item.burgers)])
    const dessertsData = data.map(item => item.desserts[getRandomIndex(item.desserts)])
    
    setMenus(menusData)
    setBurgers(burgersData)
    setDesserts(dessertsData)
  }, [])

  //maj d'infos en fonction de random index
  useEffect(() => {
    setRandomMenuIndex(getRandomIndex(menus))
    setRandomBurgerIndex(getRandomIndex(burgers))
    setRandomDessertIndex(getRandomIndex(desserts))
  }, [menus, burgers, desserts])

  // fonction pour get random index
  const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length)
  }


  // creation variable pour total des slides (3 slides - menus, burgers et desserts)
  const totalSlides = 3

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        {currentIndex === 0 && (
          <div className="carousel-item"
          style={{
            backgroundImage: `url(${bgOne})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            // marginTop: '15px',
          }}>
            <img src={menus[randomMenuIndex]?.img}/>
            <p>{menus[randomMenuIndex]?.name}</p>
          </div>
        )}
        {currentIndex === 1 && (
          <div className="carousel-item"
          style={{
              backgroundImage: `url(${TEST})`,
              backgroundSize: '100%',
              backgroundPosition: 'cover',
              backgroundRepeat: 'no-repeat',
              color: 'black',
              backgroundAttachment: 'fixed',
              height: '740px',
            }}>
            <img src={burgers[randomBurgerIndex]?.img}/>
            <p>{burgers[randomBurgerIndex]?.name}</p>
          </div>
        )}
        {currentIndex === 2 && (
          <div className="carousel-item"
          style={{
              backgroundImage: `url(${sweet})`,
              backgroundSize: '100%',
              backgroundPosition: '20 0%',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
            }}>
            <img src={desserts[randomDessertIndex]?.img}/>
            <p id='carousel-dessert-p'>{desserts[randomDessertIndex]?.name}</p>
          </div>
        )}
      </div>
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  )
}

export default Carousel

