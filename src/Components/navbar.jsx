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
                    <a href='http://localhost:3000/' className='navbar-brand'>
                       <span>JQ</span>.dev
                    </a>
                    <div className={`navbar-nav-menu ${clicked ? 'active' : ''}`}>
                      <ul className='navbar-nav'>
                          <li className='nav-item' >
                            <a href='http://localhost:3000/' className='nav-link'>
                              About
                              </a>
                          </li>
                          <li className='nav-item'>
                            <a href='http://localhost:3000/' className='nav-link'>
                              Portfolio
                            </a>  
                          </li>
                          <li className='nav-item'>
                            <a href='http://localhost:3000/' className='nav-link'>
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
