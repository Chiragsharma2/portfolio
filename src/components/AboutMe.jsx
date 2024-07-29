import React from "react";
import "./aboutme.css";
import { FaHtml5, FaCss3Alt, FaJava, FaPython, FaNode, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiMysql } from "react-icons/si";



function AboutMe() {
    return(
        <div className="aboutme">
            <h1>About Me</h1>
            <div>
            <p>
            Hello! I'm Chirag Sharma, an undergraduate soon to be graduated, eagerly seeking opportunities in the dynamic field of web development. With a passion for creating robust and innovative solutions,
            I specialize in the MERN stack—Mongodb, Express, React, and Node.js. My journey in web development has been driven by a relentless curiosity and a deep-seated desire to solve complex problems through technology.
            </p>
            </div>

            <h3>Skills</h3>
            <div className="skills">
            <div className="icon-wrapper" data-tooltip="Html"><FaHtml5 className="icon html"/></div>
            <div className="icon-wrapper" data-tooltip="Css"><FaCss3Alt className="icon css"/></div>
            <div className="icon-wrapper" data-tooltip="JavaScript"><IoLogoJavascript className="icon js"/></div>
            <div className="icon-wrapper" data-tooltip="C++"><TbBrandCpp className="icon cpp"/></div>
            <div className="icon-wrapper" data-tooltip="Java"><FaJava className="icon java"/></div>
            <div className="icon-wrapper" data-tooltip="Python"><FaPython className="icon python"/></div>
            <div className="icon-wrapper" data-tooltip="Reactjs"><RiReactjsFill className="icon react"/></div>
            <div className="icon-wrapper" data-tooltip="Nodejs"><FaNode className="icon node"/></div>
            <div className="icon-wrapper" data-tooltip="TailwindCSS"><RiTailwindCssFill className="icon tail"/></div>
            <div className="icon-wrapper" data-tooltip="MySQL"><SiMysql className="icon sql"/></div>
            <div className="icon-wrapper" data-tooltip="MongoDB"><SiMongodb className="icon mongo"/></div>
            <div className="icon-wrapper" data-tooltip="Github"><FaGithub className="icon git"/></div> 
            </div>

            <div>
            <p>
            As a dedicated learner,I thrive on challenges that push me to expand my skill set and explore new technologies. I approach every project with enthusiasm and a commitment to delivering high-quality results. My goal is to leverage my skills in web development
            to contribute effectively to innovative projects that make a difference.
            
            Outside of coding, you'll find me exploring new technologies, honing my problem-solving skills, and staying updated with the latest industry trends.
            I'm excited about the possibilities that lie ahead and look forward to connecting with like-minded professionals to collaborate and create impactful solutions.
            </p>
            </div>
            

        </div>
    )
}


export default AboutMe;
