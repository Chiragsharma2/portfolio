import React from "react";
import dashboard from "../assets/images/dashboard.png";
import homepage from "../assets/images/homepage.png";
import list from "../assets/images/list.png";
import visualize from "../assets/images/visualize.png";
import Footer from "./Footer";
import "./ExpenseProject.css";

export default function ExpenseProject() {
    return (
        <div>
        <div  className="container">
            <div  className="sidebar">
                <h6 >CASE STUDY</h6>
                <h1 >ExpenseEase</h1>
                <h4 style={{padding:"0.6rem 0.2rem", fontFamily:"var(--mediumFont)",fontWeight:"900",fontSize:"1.2rem", color:"var(--bigText",width:"70%"}}>Effortlessly manage your spending with ExpenseEase.</h4>
                <h3 >FEATURES</h3>
                <ul >
                    <li>📊 Visual Expense Tracking</li>
                    <li>🏷️ Custom Categories</li>
                    <li>🔍 Smart Filtering</li>
                    <li>📅 Date-based Sorting</li>
                    <li>💡 Expense Insights</li>
                </ul>
                <h3 >LEARNING POINTS</h3>
                <ul >
                    <li>Integrated Chart.js for data visualization</li>
                    <li>implemented JWT-based authentication</li>
                    <li>and authorization</li>
                </ul>
                <h3 >TECHNOLOGY USED</h3>
                <ul >
                    <li>Languages: HTML, CSS, JavaScript, Python</li>
                    <li>Framework: Reactjs (with vite)</li>
                    <li>Database: MongoDB</li>
                    <li>Tools: GitHub, Visual Studio Code</li>
                    <li> Other: Responsive Design</li>
                </ul>
            </div>
            <div className="main-content">
                <h1 style={{fontFamily:"var(--mediumFont"}}>Track Expenses, Gain Clarity</h1>
                <p >
                <h3 >Project Overview</h3>
                The Expense Tracker application is a web-based tool designed to help users manage their personal finances by tracking their expenses.
                    Built with Node.js, Express.js, React, and MongoDB, this application provides an intuitive interface for users to log, categorize, and visualize their expenses over time. 
                    The primary goal of this project was to create a user-friendly, responsive, and efficient platform for personal finance management.

                    <h3 >Learning Outcomes</h3>
                    Throughout the development of the Expense Tracker application, I gained extensive knowledge and hands-on experience in various aspects of web development:

                    Frontend Development: I enhanced my skills in React, particularly in state management and component-based architecture, while maintaining a clean and responsive design.

                    Backend Development: Working with MongoDB for database management helped me understand data modeling and CRUD operations.
                     Implementing RESTful APIs using Node.js and Express.js was a significant learning experience, especially in handling asynchronous operations and middleware.

                    Authentication and Security: Integrating JWT for authentication taught me about secure token handling and protecting routes. 
                    Ensuring secure communication between the frontend and backend was crucial in maintaining user data privacy.

                    Data Visualization: Implementing charts and graphs using Chart.js for visualizing expense data provided insights into data representation and user interaction with visual elements.

                    Deployment and DevOps: Deploying the application on platforms like Vercel and Render gave me practical knowledge in CI/CD pipelines, environment variables management, and handling deployment-related issues.

                    <h3 >Challenges Faced</h3>
                    Data Synchronization: Ensuring real-time synchronization between the frontend and backend was challenging, especially when dealing with multiple users and concurrent data updates.

                Error Handling: Implementing robust error handling mechanisms was essential to enhance the user experience and troubleshoot issues effectively.

                Cross-Device Compatibility: Ensuring the application worked seamlessly across different devices and screen sizes involved thorough testing and responsive design principles.

                <h3 >Growth and Passion for Growth</h3>
            I am incredibly grateful to everyone who supported me throughout this project, especially my mentors, peers, and the online development community. 
                Your guidance and feedback were invaluable in overcoming challenges and achieving project milestones.


                </p>
            </div>

            </div>
            <div  className="images">
            <img src={homepage}  alt="homepage"/>
            <div style={{display:"flex", gap:"4rem"}}>
            <img src={dashboard} style={{margin:"1rem auto", width:"30%", height:"auto"}} alt="dashboard"/>
            <img src={list} style={{margin:"1rem auto", width:"30%", height:"auto"}} alt="list"/>
            </div>
            <img src={visualize} alt="visualize"/>
            </div>
            <div  className="ending">
            <p style={{fontFamily:"var(--smallFont)",fontSize:"1.3rem", fontWeight:"300", width:"60%", }}>
                To those viewing this case study, thank you for taking the time to learn about my journey.
                This project has fueled my passion for web development and reinforced my commitment to continuous learning and improvement. 
                I am eager to apply the skills and knowledge gained from this experience to future projects, contributing to innovative solutions and advancing my career in web development.</p>
                <h1 style={{fontFamily:"var(--mediumFont)",fontWeight:"800",fontSize:"2rem", color:"var(--bigText)"}}>Thanks For Watching</h1>
            </div>
            <Footer />
        </div>
    )
}
