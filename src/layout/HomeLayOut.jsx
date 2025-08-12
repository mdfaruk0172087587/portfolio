import React from 'react';
import Navbar from '../compnents/Navbar';
import About from '../compnents/About';
import Skills from '../compnents/Skills';
import Projects from '../compnents/Projects';
import Contact from '../compnents/Contact';
import Home from '../compnents/Home';
const HomeLayOut = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </header>
            <main className='max-w-[90%] mx-auto space-y-5 my-5'>
                {/* home */}
                <section id='home'>
                    <Home></Home>
                </section>
                {/* about */}
                <section id='about'>
                    <About></About>
                </section>
                {/* skills */}
                <section id='skills'>
                    <Skills></Skills>
                </section>
                {/* project */}
                <section id='projects'>
                    <Projects></Projects>
                </section>
                {/* contact */}
                <section id='contact'>
                    <Contact></Contact>
                </section>

            </main>
        </div>
    );
};

export default HomeLayOut;