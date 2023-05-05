import React from "react";
import './tools.css';
import { FaHtml5, FaJava, FaCss3Alt, FaPython, FaJs, FaWordpress, FaSquarespace } from "react-icons/fa";
import TypeWriter from 'typewriter-effect'; 

const Tools = () => {

    return (

            <div class="row">
                <FaPython className='iconTool' />
                <FaJava className='iconTool' />
                <FaHtml5 className='iconTool'/>
                <FaCss3Alt className='iconTool' />
                <FaJs className='iconTool' />
                <FaWordpress className='iconTool' />
                <FaSquarespace className='iconTool' />
            </div>

    
     )
    


};
export default Tools; 