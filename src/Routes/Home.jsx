import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer className="py-8 bg-slate-950 text-center border-t border-slate-800">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Abubakr Hemed. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
