import React, { useEffect, useRef } from 'react'; 
import slgicon from '../../images/slgicon.png';
import trailer from '../../images/trailer4.mp4';
import close from './close.png';
import './portfolio.scss';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {gsap} from "gsap";
import {Power2} from "gsap";
import AnimCursor from '../AnimCursor';
import TypeWriter from 'typewriter-effect';   

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
      <TypeWriter onInit={(typewriter) => {typewriter.typeString("Projects").start();}}/>
      <div>
      <img src={slgicon} style={{width: "20%", maxWidth: "20%"}}></img>
      <h1>Use case | Southlights Group</h1>
      <p>Southlights Group is a DevOps service provider that delivers end-to-end automated solutions in the cloud, following a culture where development and operations teams ultimately converge to make your deployment workflows more reliable and efficient.</p><p>
      In order to carry out its digital transformation, a website was developed to provide information about the services provided by the company.</p>
</div>
{/*<img src={icport} style={{width: "80%", maxWidth: "80%", alignContent:'center'}}></img>}*/}
<div className="button-layout">

      <button class="button" onClick={toggleVideo}>
      <div class="qube">
         <div class="front">Play</div>
         <div class="back">View preview</div>
      </div>
   </button>
   </div>
   
      
      </div>
    {/*<div ref={el => (code = el)} className='code'>
      <>
      <div className='img-container'>
        <img ref={el => (image = el)} src={sl} alt='slg'/>
      </div>
      </> 
    </div>*/}

    <div className="trailer">
    <AnimCursor/> 
      <video src={trailer} loop muted autoPlay controls controlsList="nodownload" />
      <img src={close} className="close" alt="close" onClick={toggleVideo}></img>
    </div>
  </section>

);


};
export default Portfolio; 