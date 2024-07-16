import React from 'react'
import Navbar from '../Compontens/Navbar'
import CategoryMenu from '../Compontens/CategoryMenu'
import FoodItems from '../Compontens/FoodItems'
import Cart from '../Compontens/Cart'

const Home = () => {
  return (
      <>
          <Navbar />
          <CategoryMenu />
          <FoodItems />
          <Cart/>
     </>
  )
}

export default Home
