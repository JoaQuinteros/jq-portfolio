import React, { useState } from 'react';
import "../style-sheets/navbar.css";
import BurgerButton from './burgerButton/burgerButton.jsx';
//import styled from "styled-components";    

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const changeBg = () => {
    if(window.scrollY >= 100){  
      setNavbar(true);}
    else{
      setNavbar(false);
    }
    };
    window.addEventListener("scroll", changeBg);
    
    const [clicked , setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked)
    }
    return(
    
            

              <nav className={navbar ? "navbar-scroll": "navbar"}>
                    <a href='https://joaquinquinteros.com.ar/' className='navbar-brand'>
                       <span>JQ</span>.com.ar
                    </a>
                    <div className={`navbar-nav-menu ${clicked ? 'active' : ''}`}>
                      <ul className='navbar-nav'>
                          <li className='nav-item' >
                            <a href='https://joaquinquinteros.com.ar/#about' className='nav-link'>
                              About
                              </a>
                          </li>
                          <li className='nav-item'>
                            <a href='https://joaquinquinteros.com.ar/#portfolio' className='nav-link'>
                              Portfolio
                            </a>  
                          </li>
                          <li className='nav-item'>
                            <a href='https://joaquinquinteros.com.ar/#contact' className='nav-link'>
                              Contact
                            </a>  
                          </li>
                      </ul>  
                    </div>
                    <div className="burger" >
                    <BurgerButton clicked={clicked} handleClick={handleClick}/>
                    </div>
                </nav>
    )
};
export default Navbar; 
