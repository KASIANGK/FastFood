import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../userSlice'
import {addToCart} from '../../basketSlice'
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import Searchbar from "../Searchbar/Searchbar";
import data from "../../../data.json";
import BACK from "../../../public/design/bg_yellow_one.jpg";
// import BACKY from "../../../public/design/yellow-back.jpg";
import BACKY from "../../../public/design/ok.jpg";
// import BACKY from "../../../public/img/test.jpg";
import './MainPage.css'
import back from "../../../public/design/ours.jpg";
import mcdologo from '../../../public/design/mcdologo.png'
import Threeimg from "../ThreeImg/Threeimg";

function MainPage() {

  const [searchedWord, setSearchedWord] = useState("")
  const [currentPage, setCurrentPage] = useState(0)
  const pageSize = 6
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.user.loggedInUser)


  // affichage tous les produits data : 
  
  // creation array pour "assembler" les 3 categories de data (menus, burgers et desserts)
  const allProducts = [...data.reduce((acc, curr) => {
    return acc.concat(curr.menus, curr.burgers, curr.desserts)
  }, [])]

  // fonction pour melanger un array
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5)
  }

  // sauvegarde des produits melanges dans une variable
  const shuffledProducts = shuffleArray(allProducts)

  // filtre pour savoir si le nom du produit correspondant au mot saisis dans Searchbar
  const filteredProducts = shuffledProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchedWord.toLowerCase())
  })



  // pagination :

  // calcul du nombre total de page
  const totalPages = Math.ceil(filteredProducts.length / pageSize)

  // tranche des produits a afficher sur page courante
  const paginatedProducts = filteredProducts.slice(
    //calcul l'index du 1e produit a afficher sur page courante
    currentPage * pageSize,
    //calcul l'index du 1e produit a afficher sur page suivante
    (currentPage + 1) * pageSize
  )


  
  function handleSearch(word) {
    setSearchedWord(word)
  }


  function handlePageChange(pageNumber) {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  const handleAddProduct = (product) => {
    if (!loggedIn) {
      alert("u must be logged in 2 add to basket")
      return
    }
    dispatch(addToCart(product))
  }

  return (
    <div className="mainpage">
      <Navbar />
      <div>
        <Carousel></Carousel>
      </div>
      <div className="bg-all-products"
      style={{ backgroundImage: `url(${BACKY})` }}>
          <div className="mcdologo">
            <img className="mcdologo" src={mcdologo}></img>
          </div>
          <div className="search">
            <Searchbar onSearch={handleSearch}></Searchbar>
          </div>
        <div className="all-products">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product, i) => (
              <div key={product.id} className="card">
                {product.img && <img src={product.img} className="card-img" />}
                <div className="card-title">
                  <h4>{product.name}</h4>
                </div>
                <div className="card-txt">
                  {/* <button onClick={() => handleAddProduct(product)}>
                    ADD {product.price}
                  </button> */}
                </div>
              </div>
            ))
          ) : (
            <p>OOPS</p>
          )}

        </div>
        {totalPages > 1 && (
            <div className="pagination">
              <button
                disabled={currentPage === 0}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                PREV
              </button>
              <button
                disabled={currentPage === totalPages - 1}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                NEXT
              </button>
            </div>
          )}
      </div>
    </div>
  )
}

export default MainPage