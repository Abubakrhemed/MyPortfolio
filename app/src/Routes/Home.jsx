import React from 'react';
import Navbar from '../Components/Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Hero from '../Components/Hero'
const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home">
        <Hero/>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
