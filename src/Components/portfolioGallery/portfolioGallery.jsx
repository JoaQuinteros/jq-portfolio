import React from "react";
import TypeWriter from 'typewriter-effect'; 
import './portfolioGallery.css';
import Img1 from '../../images/img1.webp';
import Img2 from '../../images/img2.webp';
import Img3 from '../../images/img3.png';
import Img4 from '../../images/img4.png';
import Img5 from '../../images/img5.webp';
import Img6 from '../../images/img6.png';
import Img7 from '../../images/img7.png';
import Img8 from '../../images/img8.png';
import Img9 from '../../images/img9.webp';
import Img10 from '../../images/img10.png';
import trailer1 from '../../images/trailer1.mp4';
import trailer2 from '../../images/trailer2.mp4';
import trailer3 from '../../images/trailer3.mp4';
import trailer4 from '../../images/trailer4.mp4';
import trailer5 from '../../images/trailer5.mp4';
import trailer6 from '../../images/trailer6.mp4';
import trailer7 from '../../images/trailer7.mp4';
import trailer8 from '../../images/trailer8.mp4';
import trailer9 from '../../images/trailer9.mp4';
import trailer10 from '../../images/trailer10.mp4';
import AnimCursor from '../AnimCursor';
import close from '../../Components/portfolio/close.png';    

const Gallery = () => {
    let data =[{id:1,imgSrc:Img1,vidSrc:trailer1,},
               {id:2,imgSrc:Img2,vidSrc:trailer2,},
               {id:4,imgSrc:Img4,vidSrc:trailer3,},
               {id:6,imgSrc:Img6,vidSrc:trailer5,},
               {id:7,imgSrc:Img7,vidSrc:trailer7,},
               {id:5,imgSrc:Img5,vidSrc:trailer4,},
               {id:3,imgSrc:Img3,vidSrc:trailer6,},
               {id:8,imgSrc:Img8,vidSrc:trailer8,},
               {id:9,imgSrc:Img9,vidSrc:trailer9,},
               {id:10,imgSrc:Img10,vidSrc:trailer10,},]
    
    

    function toggleVideo(event, item){
    const trailerVid = document.getElementById('trailer-gallery-'+item.id);
    const videoTrailer = document.getElementById(item.id)
    trailerVid.classList.toggle('video-active');
    if (videoTrailer.paused === true) {
        videoTrailer.play();
      } else {
        videoTrailer.pause();
        videoTrailer.currentTime = 0;
      }
    //videoTrailer.currentTime = 0;
    //videoTrailer.onpause();
    
    };
    return (

            <>
            <div className="titleAndButton" id="portfolio" >
            <TypeWriter onInit={(typewriter) => {typewriter.typeString("Portfolio").start();}}/>
            <br/>
            <div className="gallery">
                {
                    data.map((item, index) =>{return(
                        <div>
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} style={{width: '100%'}} alt={item} onClick={(event) => toggleVideo(event, item)}/>
                        </div>
                        <div id={"trailer-gallery-"+item.id} className="trailer-gallery">
                        <AnimCursor/> 
                        <video id={item.id} className="video-gallery" src={item.vidSrc} loop muted autoPlay controls controlsList="nodownload" />
                        <img src={close} className="close" alt="close" onClick={(event) => toggleVideo(event, item)}></img>
                        </div>
                        </div>



                    )})
                }
            </div>
            </div>
            </>
    
     )


};
export default Gallery; 