import React, { useEffect, useRef } from 'react';
import '../portfolio/portfolio.scss';
import icicon from '../../images/icicon.png';
import trailer from '../../images/trailer10.mp4';
import close from './close.png';
import AnimCursor from '../AnimCursor';    
const PortfolioADV = () => {

    let code = useRef(null);
    let image = useRef(null);
    function toggleVideo() {
      const trailerVid = document.querySelector('.trailerTwo');
      const videoTrailer = document.querySelector('video');
      trailerVid.classList.toggle('active');
      videoTrailer.currentTime = 0;
      videoTrailer.pause();
    };

    return(
    <section className='main'>

      <div className="titleAndButton">
      <img src={icicon} style={{width: "20%", maxWidth: "2  0%"}}></img>
      <h1>Use Case | Integral Comunicaciones</h1>
      
      <p>Integral Comunicaciones is an internet service provider company with extensive experience in Villa Carlos Paz, Córdoba. Their mission is to continuously improve their customer service, automate processes and analyze data for more efficient and less risky decision making.
      </p><p>
Integral Comunicaciones needed a reliable technical partner to support its digital strategy and create a platform that allows its clients to carry out operations, service status tests, queries and claims in a self-managed way, providing a more direct and intuitive means of communication and reducing costs. response times by the company for inquiries and claims about the service provided.
</p><p>
In turn, as part of its digital transformation, with the aim of automating processes and increasing the capacity to analyze data, a business intelligence solution was designed and developed, which included a data warehouse and a platform with indicator boards that combined With the implementation of data mining, they allow to improve the decision making of the board of directors.
</p>
<div className="button-layout">
<button class="button" onClick={toggleVideo}>
      <div class="qube">
         <div class="front">Play</div>
         <div class="back">View preview</div>
      </div>
      </button>
      </div>
      </div>
     {/* <div ref={el => (code = el)} className='code'>
      <>
      <div className='img-container'>
        <img ref={el => (image = el)} src={ic} alt='ic'/>
      </div>
      </> 
    </div>
    */}
    <div className="trailerTwo">
    <AnimCursor/> 
      <video src={trailer} loop muted autoPlay controls controlsList="nodownload" />
      <img src={close} className="close" alt="close" onClick={toggleVideo}></img>
    </div>
  </section>
  
  
);


};
export default PortfolioADV; 