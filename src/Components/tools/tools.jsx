import React from "react";
import './tools.css';
import { FaHtml5, FaJava, FaCss3Alt, FaPython, FaJs, FaWordpress, FaSquarespace } from "react-icons/fa";
import TypeWriter from 'typewriter-effect'; 

const Tools = () => {

    return (
         <>        
    <div className="contentText">
            <TypeWriter onInit={(typewriter) => 
            {typewriter.typeString("I am a systems engineer passionate about technology, who loves challenges and problem solving. What motivated me to carry out different types of projects throughout my career such as software development, web pages, data analysis and business intelligence among others. Each project is unique, which implies that the best technology must be used for each one, for this reason I have trained in a wide variety of technologies and tools to be able to carry out each project in the most optimal way.").start();}}/>
            </div>
            <div className="titleAndButton" >
            <TypeWriter onInit={(typewriter) => {typewriter.typeString("My Tools").start();}}/>
            </div>
            <div class="row">
                <FaPython className='iconTool' />
                <FaJava className='iconTool' />
                <FaHtml5 className='iconTool'/>
                <FaCss3Alt className='iconTool' />
                <FaJs className='iconTool' />
                <FaWordpress className='iconTool' />
                <FaSquarespace className='iconTool' />
            </div>
            </>


    
     )
    


};
export default Tools; 