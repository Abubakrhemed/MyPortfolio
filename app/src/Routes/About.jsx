import React, { useEffect, useRef } from 'react';
import '../Styles/AboutStyles.css'
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
import { FaLinux } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaRaspberryPi } from "react-icons/fa";
import { SiAndroidstudio } from "react-icons/si";
import { FaJava } from "react-icons/fa";

const About = () => {
  const observerRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const direction = entry.target.getAttribute('data-direction');
            entry.target.classList.add('animate', `scroll-${direction}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    observerRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      observerRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  

  const addToRefs = (el) => {
    if (el && !observerRef.current.includes(el)) {
      observerRef.current.push(el);
    }
  };

  return (
    <div className='aboutContainer'>
      <div className="aboutGrid">
      <div className="right-Card">
        <h1 >About Me</h1>
        <p>I'm Abubakr Hemed, a Computer Engineering Technology student at Humber College, currently in the second year of my three year program. I'm actively seeking an 8 month co-op placement for the Fall 2025 to Winter 2026 term, where I can apply my technical skills, passion for innovation, and hands on project experience in a real world environment.
        </p>
      </div>

      <div className="left-Card">
        <h1 className="skills-row" data-direction="bottom" ref={addToRefs}> Skills</h1>

        <p className="skills-row" data-direction="top" ref={addToRefs}>
          <span><IoLogoJavascript /> JavaScript</span>
          <span><IoLogoHtml5 /> HTML</span>
          <span><FaCss3 /> CSS</span>
          <span><SiAndroidstudio /> Android Studio</span>
        </p>

       <p className="skills-row" data-direction="bottom" ref={addToRefs}>
          <span>C</span>
          <span><FaReact /> React</span>
          <span><AiOutlineConsoleSql /> SQL</span>
        </p>

       <p className="skills-row" data-direction="top" ref={addToRefs}>
          <span><IoLogoFirebase /> Firebase</span>
          <span><FaLinux /> Linux</span>
          <span><SiArduino /> Arduino</span>
        </p>

       <p className="skills-row" data-direction="bottom" ref={addToRefs}>
          <span><FaLinux /> Linux</span>
          <span><SiArduino /> Arduino</span>
          <span><FaGitAlt /> Git</span>
        </p>

       <p className="skills-row" data-direction="bottom" ref={addToRefs}>
          <span><SiAndroidstudio /> Android Studio</span>
          <span><FaRaspberryPi /> Raspberry Pi</span>
          <span><FaJava />Java</span>
        </p>
      </div>
      </div>
    </div>
  )
};

export default About;
