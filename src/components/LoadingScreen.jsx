import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import ContactButton from './ContactButton.jsx';
import ExpenseProject from './ExpenseProject.jsx';

function Loader() {
    const [IsLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000);
    }, []);

    return (
        <>
            <Header IsLoading={IsLoading} />
            <AnimatePresence>
            {IsLoading ? (
                <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: '-100%' }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000000',
                        zIndex: 1001
                    }}
                >
                    <motion.div
                        animate={{
                            scale: [0,1,0],
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            position: 'absolute',
                            width: 70,
                            height: 70,
                            top: '40%',
                            left: '50%',
                            backgroundColor: '#A9A9A9',
                            borderRadius: '50%',
                            opacity: 0.6,
                            marginBottom: '20px',
                            scale: 0
                        }}
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 , duration:0.5}}
                        style={{
                            position: 'absolute',
                            left: '3%',
                            bottom: '8%',
                            fontFamily: 'var(--smallFont)',
                            fontSize: 'clamp(2rem,4rem,6rem)',
                            letterSpacing: '0.5rem',
                            opacity: 0.6,
                            color: '#A9A9A9'
                        }}
                    >   
                        <p style={{fontSize:'clamp(0.5rem,1rem,1.5rem)', fontWeight:400}}>WELCOME</p>
                        <p>Wait a bit...</p>
                    </motion.h2>
                </motion.div>
            ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path='/projects/expense-tracker' element={<ExpenseProject />} />
                        </Routes>
                        <ContactButton />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Loader;

