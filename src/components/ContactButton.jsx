import React from "react";
import contactme2 from "../assets/images/contactme2.png";
import uparrow from "../assets/images/uparrow.png";
import "./contactbutton.css"
import { Link, Outlet } from "react-router-dom";


function ContactButton () {

        const [IsVisible, setIsVisible] = React.useState(false);
      
        const toggleVisibility = () => {
          if (window.scrollY > 100) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
      
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };
    

    React.useEffect(() => {
        window.addEventListener('scroll',toggleVisibility);
        return() =>{
            window.removeEventListener('scroll',toggleVisibility);
        }
    },[])

    return (
        <>
            
            <a href="mailto:chirag.sharma26262@gmail.com" className="contact-button">
                <img src={contactme2} alt="Contact me" />
                <span>Contact Me</span>
            </a>

            <Link to="#"  onClick={scrollToTop} className={`up-button ${IsVisible ? 'visible' : ''}`}>
                <img src={uparrow} alt="up-arrow" />
            </Link>



            <Outlet />            
         </>
    )
}

export default ContactButton;