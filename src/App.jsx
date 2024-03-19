import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import MainPage from './Components/MainPage/MainPage'
import Products from './Components/Products/Products'


const routeur = createBrowserRouter([
  {
    path: '/',
    element: <MainPage></MainPage>
  },
  {
    path: '/products',
    element: <Products></Products>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={routeur}></RouterProvider>
    </div>
  )
}

export default App
