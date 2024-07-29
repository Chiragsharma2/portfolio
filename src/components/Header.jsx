import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';
import "./header.css";

function CustomLink({ children, to, ...props }) {
    const isInternalLink = to.startsWith('#');

    if (isInternalLink) {
        return <a href={to} className="custom-link" {...props}>{children}</a>;
    }

    return <Link to={to} className="custom-link" {...props}>{children}</Link>;
}

function Header({ IsLoading }) {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className={`header ${IsLoading ? 'loading' : ''} ${menuOpen ? 'menu-open' : ''}`}>
            <nav className='navbar'>
                <CustomLink to="/" className='navbar-left' onClick={closeMenu}>
                    <img className='navbar-logo' src={logo} alt='logo' />
                    <div className='navbar-name-container'>
                        <span className='navbar-name'>CHIRAG SHARMA</span>
                        <span className='navbar-subtitle'>Full Stack Developer</span>
                    </div>
                </CustomLink>

                <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="menu-text">{menuOpen ? 'CLOSE' : 'MENU'}</span>
                    <b>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </b>
                </div>
            </nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className={`menu-page ${menuOpen ? 'open' : ''}`}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration:0.5, ease:'linear'}}
                    >
                        <span>MENU</span>
                        <CustomLink to='#projects' onClick={closeMenu}>Projects</CustomLink>
                        <CustomLink to="#aboutme" onClick={closeMenu}>About Me</CustomLink>
                        <CustomLink to="mailto:chirag.sharma26262@gmail.com" onClick={closeMenu}>Contact</CustomLink>
                        <CustomLink to="https://www.linkedin.com/in/chirag-sharma-715a4121b" onClick={closeMenu} target="_blank" rel="noopener noreferrer">LinkedIn</CustomLink>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Header;
