import React from "react";
import './portfolioGallery.css';
import Img1 from '../../images/img1.webp';
import Img2 from '../../images/img2.webp';
import Img3 from '../../images/img3.png';
import Img4 from '../../images/img4.png';
import Img5 from '../../images/img5.webp';
import Img6 from '../../images/img6.png';
import Img7 from '../../images/img7.png';
import trailer from '../../Components/portfolio/trailer.mp4';
import AnimCursor from '../AnimCursor';
import close from '../../Components/portfolio/close.png';    

const Gallery = () => {
    let data =[{id:1,imgSrc:Img1,vidSrc:trailer,},
               {id:2,imgSrc:Img2,vidSrc:trailer,},
               {id:4,imgSrc:Img4,vidSrc:trailer,},
               {id:5,imgSrc:Img5,vidSrc:trailer,},
               {id:6,imgSrc:Img6,vidSrc:trailer,},
               {id:3,imgSrc:Img3,vidSrc:trailer,},
               {id:7,imgSrc:Img7,vidSrc:trailer,},]


    function toggleVideo() {
    const trailerVid = document.querySelector('.trailer');
    const videoTrailer = document.querySelector('video');
    trailerVid.classList.toggle('active');
    videoTrailer.currentTime = 0;
    videoTrailer.pause();
    };
    return (

            <>

          
            <div className="gallery">
                {
                    data.map((item, index) =>{return(
                        <div className="pics" key={index}>
                            <img src={item.imgSrc} style={{width: '100%'}} alt={item} onClick={toggleVideo}/>
                        </div>
                    )})
                }
            </div>
            <div className="trailer">
            <AnimCursor/> 
            <video src={trailer} loop muted autoPlay controls controlsList="nodownload" />
            <img src={close} className="close" alt="close" onClick={toggleVideo}></img>
            </div>
            </>
    
     )


};
export default Gallery; 