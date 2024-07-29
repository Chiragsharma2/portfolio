import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./home.css";
import Projects from './Projects.jsx';
import AboutMe from './AboutMe.jsx';
import Footer from './Footer.jsx';
import CallToAction from './CallToAction.jsx';




function Home() {
    return(
        <>
        <section id="home">
            <div className="hero-content">   
                <h1>Empowering Digital Transformation with Web Solutions</h1>
                <p>Hi, I'm Chirag Sharma, a web developer specializing in creating innovative, scalable, and high-performance web applications. Leveraging the power of the MERN stack and beyond, I turn your vision into reality.</p>
                <AnchorLink href="#projects" className="btn-primary">View My Work</AnchorLink>
                <span>or</span>
                <AnchorLink href="#aboutme"  className="btn-primary">Read About Me</AnchorLink>
            </div>
        </section>
        <section id="projects">
            <Projects />
        </section>
        <section id="aboutme">
            <AboutMe />
        </section>
        <section id="CallToAction">
            <CallToAction />
        </section>
        <section id="footer">
            <Footer />
        </section>
        </>
    )
}


export default Home;
