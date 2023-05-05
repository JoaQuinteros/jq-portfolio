import React, { useEffect, useRef } from 'react';
import sl from './slg.png';
import trailer from './trailer.mp4';
import close from './close.png';
import './portfolio.scss';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {gsap} from "gsap";
import {Power2} from "gsap";
import AnimCursor from '../AnimCursor';    

const Portfolio = () => {
  
    
    let code = useRef(null);
    let image = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".img-container:after");
    let tl = gsap.timeline();
    
    function toggleVideo() {
      const trailerVid = document.querySelector('.trailer');
      const videoTrailer = document.querySelector('video');
      trailerVid.classList.toggle('active');
      videoTrailer.currentTime = 0;
      videoTrailer.pause();
    };

    useEffect(() => {
      tl.to(code, { duration: 0, visibility: "visible" })
      .to(imageReveal, {duration: 1.4, width: "0%", ease: Power2.easeInOut})
      .from(image, {duration: 1.4, scale: 1.6, ease: Power2.easeInOut, delay: -1.6})
    });
    return(
    <section className='main'>
      <div className="titleAndButton">
      <h1>Southlights Group</h1>
      <button class="button" onClick={toggleVideo}>
      <div class="qube">
         <div class="front">Play</div>
         <div class="back">View preview</div>
      </div>
   </button>
      </div>
    <div ref={el => (code = el)} className='code'>
      <>
      <div className='img-container'>
        <img ref={el => (image = el)} src={sl} alt='slg'/>
      </div>
      </> 
    </div>

    <div className="trailer">
    <AnimCursor/> 
      <video src={trailer} loop muted autoPlay controls controlsList="nodownload" />
      <img src={close} className="close" alt="close" onClick={toggleVideo}></img>
    </div>
  </section>

);


};
export default Portfolio; 