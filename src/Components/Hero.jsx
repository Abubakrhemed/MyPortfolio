import React from 'react';
import '../Styles/HeroStyles.css';
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

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">

                <div className="skills-row slide-left">
                    <span><IoLogoJavascript /> JavaScript</span>
                    <span><IoLogoHtml5 /> HTML</span>
                    <span><FaCss3 /> CSS</span>
                    <span><i className="devicon-c-plain custom-white"></i></span>
                </div>

                <h1 className="hero-title">Abubakr Hemed</h1>
                <p className="hero-subtitle">Full-Stack Developer • IoT • Mobile Developer</p>

                <div className="skills-row slide-right">
                    <span><FaReact /> React</span>
                    <span><AiOutlineConsoleSql /> SQL</span>
                    <span><IoLogoFirebase />Firebase</span>
                    <span><FaLinux />Linux</span>
                </div>

                <div className="skills-row slide-left">
                    <span><SiArduino />Arduino</span>
                    <span><FaGitAlt />Git</span>
                    <span><FaRaspberryPi />Raspberry Pi</span>
                    <span><SiAndroidstudio />Android Studio</span>
                </div>

            </div>
        </section>
    );
};

export default Hero;
