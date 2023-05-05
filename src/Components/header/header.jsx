import React from "react";
import TypeWriter from 'typewriter-effect'; 
import './header.css';
import imag from './pexels-luis-gomes-546819.jpg';

const Header = () =>{
return (
    <div className='header'>
        <div>
            <div className="img">
                <img src={imag} alt='i'/>
            </div>
            <div className="ImgOver"></div>  
        </div>
        <div className="content">
        <TypeWriter onInit={(typewriter) => {typewriter.typeString("Welcome to my portfolio").start();}}/>
        <div className="contentText">
            <TypeWriter onInit={(typewriter) => 
            {typewriter.typeString("Welcome to my portfolio, I'm Joaquin Quinteros a Systems engineer pasionate about technology  with experience in different technologies, software development projects, data analytics and business intelligence.").start();}}/>
            </div>
        </div>
        
    </div>
    

 )
}
export default Header