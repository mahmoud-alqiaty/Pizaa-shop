import React, { useState, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Footer from './components/Footer/Footer';
import Hero from './components/HeroSection/Hero';
import Navbar from './components/NavAndSidebars/Navbar';
import Sidebar from './components/NavAndSidebars/Sidebar';
import Products from './components/Products/Products';
import { productsOne, productsTwo } from './components/Products/ProductsData';

const Globalstyles = createGlobalStyle `
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`

export const menuOpenContext = createContext()

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = ()=>{
    setIsMenuOpen(true)
 }

  const closeMenu = ()=>{
    setIsMenuOpen(false)
 }
  return (
    <BrowserRouter>
      <Globalstyles />
      <menuOpenContext.Provider value={{isMenuOpen, openMenu, closeMenu}}>
        <Navbar />
        <Sidebar />
        <Hero />
        <Products productsData={productsOne} heading="choose your favorite" />
        <FeaturedProduct />
        <Products productsData={productsTwo} heading="sweets made for you" />
        <Footer />
      </menuOpenContext.Provider>
    </BrowserRouter>
    
   
  );
}

export default App;
