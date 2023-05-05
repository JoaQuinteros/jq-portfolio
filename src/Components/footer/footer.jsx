import { FaGithub,FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import './footer.css';
const Footer = () => {

    return(
            <div className="footer-row">
                <a href='https://github.com/JoaQuinteros'><FaGithub className='iconTool' /></a>
                <a href='https://www.linkedin.com/in/joaquin-quinteros/'><FaLinkedinIn className='iconTool'/></a>
                <a href='mailto:ing.quinterosjoaquin@gmail.com'><FaMailBulk className='iconTool' /></a>
            </div>

  
  
);


};
export default Footer; 