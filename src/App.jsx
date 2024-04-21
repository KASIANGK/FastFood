import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import MainPage from './Components/MainPage/MainPage'
import Burgers from './Components/Burgers/Burgers'
import Burger from './Components/Burger/Burger'
import Menus from './Components/Menus/Menus'
import Menu from './Components/Menu/Menu'
import Desserts from './Components/Desserts/Desserts'
import Dessert from './Components/Dessert/Dessert'
import Login from './Components/LogIn/LogIn'
import Ctc from './Components/Ctc/Ctc'


const routeur = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>
  },
  {
    path: '/burgers',
    element: <Burgers></Burgers>
  },
  {
    path: '/burgers/:id',
    element: <Burger></Burger>
  },
  {
    path: '/menus',
    element: <Menus></Menus>
  },
  {
    path: '/menus/:id',
    element: <Menu></Menu>
  },
  {
    path: '/desserts',
    element: <Desserts></Desserts>
  },
  {
    path: '/desserts/:id',
    element: <Dessert></Dessert>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/ctc',
    element: <Ctc></Ctc>
  }
])

function App() {

  return (
    <div className='og'>
      <RouterProvider router={routeur}></RouterProvider>
    </div>
  )
}

export default App
