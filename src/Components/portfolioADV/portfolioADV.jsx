import React, { useEffect, useRef } from 'react';
import adv from './adv.png';
import '../portfolio/portfolio.scss';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {gsap} from "gsap";
import {Power2} from "gsap";    

const PortfolioADV = () => {


    let code = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".img-container:after");
    let tl = gsap.timeline();
     
    useEffect(() => {
      tl.to(code, { duration: 0, visibility: "visible" })
      .to(imageReveal, {duration: 1.4, width: "0%", ease: Power2.easeInOut})
      .from(image, {duration: 1.4, scale: 1.6, ease: Power2.easeInOut, delay: -1.6})
    });
    return(
    <section className='main'>
      <h1>Arte del Valle</h1>
    <div ref={el => (code = el)} className='code'>
      <>
      <div className='img-container'>
        <img ref={el => (image = el)} src={adv} alt='adv'/>
      </div>
      </> 
    </div>
  </section>
  
  
);


};
export default PortfolioADV; 