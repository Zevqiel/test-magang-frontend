import React from 'react'
import Navbar from './components/Navbar/navbar'
import SecondNavbar from './components/Navbar/secondNavbar'
import Hero from './components/HeroSection'
import ProductSection from './components/ProductSection'

const App = () => {
  return (
    <>
      <Navbar/>
      <SecondNavbar/>
      <Hero/>
      <ProductSection/>
    </>
  )
}

export default App
