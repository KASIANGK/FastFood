// import { useState, useEffect } from 'react';
// import './Carousel.css';
// import data from '../../../data.json';

// function Carousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [menus, setMenus] = useState([])
//   const [burgers, setBurgers] = useState([])
//   const [desserts, setDesserts] = useState([])

//   useEffect(() => {
//  //division donnees (3 donnees differentes - menus, biurgers, desserts)
//     const menusData = data.map(item => item.menus[0])
//     const burgersData = data.map(item => item.burgers[0])
//     const dessertsData = data.map(item => item.desserts[0])
    
//     setMenus(menusData)
//     setBurgers(burgersData)
//     setDesserts(dessertsData)
//   }, [])

// // creation variable - le total de slides (3 slides - menus, burgers, desserts)
//   const totalSlides = 3

//  // fonction pour page suivante
//   const nextSlide = () => {
//     setCurrentIndex((currentIndex + 1) % totalSlides)
//   }

//  // fonction pour page precedente
//   const prevSlide = () => {
//     setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)
//   }

//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         {currentIndex === 0 && (
//           <div className="carousel-item">
//             {menus.map((menu, index) => (
//               <div key={index}>
//                 <h2>{menu.name}</h2>
//                 <p>{menu.price}</p>
//                 {/* Ajoutez d'autres informations du menu si nécessaire */}
//               </div>
//             ))}
//           </div>
//         )}
//         {currentIndex === 1 && (
//           <div className="carousel-item">
//             {burgers.map((burger, index) => (
//               <div key={index}>
//                 <h2>{burger.name}</h2>
//                 <p>{burger.price}</p>
//                 {/* Ajoutez d'autres informations du burger si nécessaire */}
//               </div>
//             ))}
//           </div>
//         )}
//         {currentIndex === 2 && (
//           <div className="carousel-item">
//             {desserts.map((dessert, index) => (
//               <div key={index}>
//                 <h2>{dessert.name}</h2>
//                 <p>{dessert.price}</p>
//                 {/* Ajoutez d'autres informations du dessert si nécessaire */}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <button className="prev" onClick={prevSlide}>Previous</button>
//       <button className="next" onClick={nextSlide}>Next</button>
//     </div>
//   )
// }

// export default Carousel




// carousel random 
import React, { useState, useEffect } from 'react';
import './Carousel.css';
import data from '../../../data.json';

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
          <div className="carousel-item">
            <h2>{menus[randomMenuIndex]?.name}</h2>
            <p>{menus[randomMenuIndex]?.price}</p>
          </div>
        )}
        {currentIndex === 1 && (
          <div className="carousel-item">
            <h2>{burgers[randomBurgerIndex]?.name}</h2>
            <p>{burgers[randomBurgerIndex]?.price}</p>
          </div>
        )}
        {currentIndex === 2 && (
          <div className="carousel-item">
            <h2>{desserts[randomDessertIndex]?.name}</h2>
            <p>{desserts[randomDessertIndex]?.price}</p>
          </div>
        )}
      </div>
      <button className="prev" onClick={prevSlide}>Previous</button>
      <button className="next" onClick={nextSlide}>Next</button>
    </div>
  )
}

export default Carousel

