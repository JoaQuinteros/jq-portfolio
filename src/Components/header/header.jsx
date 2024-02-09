import React from "react";
import TypeWriter from 'typewriter-effect'; 
import './header.css';
import imag from './pexels-luis-gomes-546819.jpg';

const Header = () =>{
return (
    <div className='header'>
        <div>
            <div className="img">
                <img src={imag} alt='i' />
            </div>
            <div className="ImgOver"></div>  
        </div>
        <div className="content" id="about">
        <TypeWriter onInit={(typewriter) => {typewriter.typeString("About").start();}}/>
        </div>
        <div style={{backgroundImage:"linear-gradient(transparent, black)"}}></div>
    </div>
    

 )
}
export default Header