import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Content = () => {
  return (
    <footer className="footer1" >
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h3>Contact Information &#9472;</h3>
          <p>Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.</p>
          <ul className="contact-list">
            <li>Email: chirag.sharma26262@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section navigation-links">
          <h3>Navigation</h3>
          <ul className="refer">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section social-links">
          <h3>Connect with Me</h3>
          <ul>
            <li>
              <a style={{display:"inline-flex",alignItems:"center"}} href="https://www.linkedin.com/in/chirag-sharma-715a4121b" target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={{marginRight:"5", opacity:"0.6", fontSize:"1.3rem"}}/>LinkedIn
              </a>
            </li>
            <li>
              <a style={{display:"inline-flex",alignItems:"center"}} href="https://github.com/chiragsharma382" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{marginRight:"5",opacity:"0.6", fontSize:"1.3rem"}}/> Github
              </a>
            </li>
          </ul>
        </div>
        
        <div className="end">
          <p>Open to Opportunities</p>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Chirag Sharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Content;
