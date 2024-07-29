import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import cover from "../assets/images/cover-img.png";
import qr3 from "../assets/images/qr3.png";


const Project = ({ title, desc, link, img}) => {
    return (
        <Link to={link} className="card" style={{backgroundImage:`url(${img})`, backgroundRepeat:"no-repeat",backgroundSize:"75%",backgroundPosition:"center"}}>
            <h1>{title}</h1>
            <h3>{desc}</h3>
            <p>View Case Study &rarr;</p>
        </Link>
    )
}
function Projects() {
    const [MyProjects,setMyProjects] = React.useState([
        {Title: "ExpenseEase", Desc: "Manage your Expenses with ease" , key:1, link:"/projects/expense-tracker",img:`${cover}`},
        {Title: "QR Code Generator", Desc: "No need to worry about long URLs", key:2, link:"https://github.com/Chiragsharma2/QR-Code-Generator",img:`${qr3}`}
    ]);
    return(
        <div className="project-container">
            <h3>SELECTED PROJECTS</h3>
            <h1>Case Studies</h1>
            {MyProjects.map((project,index) => (
                 <Project key={index} title={project.Title} desc={project.Desc} link={project.link} img={project.img} />
            ))}
        </div>
    )
}


export default Projects;
