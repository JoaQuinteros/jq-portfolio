import './App.scss';
//import React, { useState, useEffect, useRef } from 'react';
import NavBar from './Components/navbar.jsx'
import Header from './Components/header/header.jsx';
import Portfolio from './Components/portfolio/portfolio.jsx';
import Tools from './Components/tools/tools.jsx';
import PortfolioADV from './Components/portfolioADV/portfolioADV.jsx';
import Footer from './Components/footer/footer.jsx';
import AnimCursor from './Components/AnimCursor';
import Gallery from './Components/portfolioGallery/portfolioGallery';
//import TypeWriter from 'typewriter-effect';
//import sl from './images/slg.png';
//import CSSRulePlugin from "gsap/CSSRulePlugin";
//import {gsap} from "gsap";
//import {Power2} from "gsap";    

function App() {


  
  return (
    <div className="App">
      <AnimCursor/>
      <Header />
      <Tools />
      <Portfolio />
      <PortfolioADV />
      <Gallery/>
      <Footer/>
      <NavBar/>
    </div>
  );
}

export default App;
