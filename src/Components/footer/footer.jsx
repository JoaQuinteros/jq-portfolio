import { FaGithub,FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import './footer.css';
import TypeWriter from 'typewriter-effect';     
const Footer = () => {

    return(
        <div className="titleAndButton" id="contact">
        <TypeWriter onInit={(typewriter) => {typewriter.typeString("Contact").start();}}/>
        
            <div className="footer-row">
                <a href='https://github.com/JoaQuinteros'><FaGithub className='iconTool' /></a>
                <a href='https://www.linkedin.com/in/joaquin-quinteros/'><FaLinkedinIn className='iconTool'/></a>
                <a href='mailto:ing.quinterosjoaquin@gmail.com'><FaMailBulk className='iconTool' /></a>
            </div>
            </div>
  
  
);


};
export default Footer; 