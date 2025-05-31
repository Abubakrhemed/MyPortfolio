import React, { useEffect, useRef } from 'react';
import '../Styles/ProjectStyles.css'
import project1Video from '../assets/Videos/project 1 video.mp4';
import project2Video from '../assets/Videos/project 2 video.mp4';
import project3Video from '../assets/Videos/project 3 video.mp4';

const Projects = () => {
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
    <div className='projectConatiner'>
      <h1 className='projectSectionTitle'>My Projects</h1>
      <div className='projectCardGrid'>

      <div className="projectCard" data-direction="top" ref={addToRefs}>
          <div className="projectCardtitle">
            <h1>Arduino Smart Traffic Light</h1>
          </div>
          <div className="projectCardVideo">
            <video controls width="100%">
              <source src={project1Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="projectDetails">
            <p>
              An Arduino powered traffic controller that simulates real world signal behavior using LEDs and a potentiometer. Features blinking transitions, dynamic light timing, and mimics real traffic flow logic.
            </p>
          </div>
        </div>

        <div className="projectCard" data-direction="bottom" ref={addToRefs}>
          <div className="projectCardtitle">
            <h1>AAS Detailing — Full-Stack Booking Web App</h1>
          </div>
          <div className="projectCardVideo">
            <video controls width="100%">
              <source src={project2Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="projectDetails">
            <p>
            A modern React + Firebase-powered web application that allows customers to book mobile auto services like detailing and oil changes. Features include real-time appointment scheduling, Google login authentication, double-booking prevention, and a responsive, user-friendly interface designed to support a real physical business.
            </p>
          </div>
        </div>


        <div className="projectCard" data-direction="top" ref={addToRefs}>
          <div className="projectCardtitle">
            <h1>Cookie Clicker Javascript Game</h1>
          </div>
          <div className="projectCardVideo">
            <video controls width="100%">
              <source src={project3Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="projectDetails">
            <p>
              A dynamic browser-based idle game built with HTML, CSS, and JavaScript. Players click to earn cookies, unlock upgrades, and automate production. Features include score tracking, upgrade logic, auto-clickers, and responsive UI — all coded from scratch to showcase interactive frontend logic and game state management.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Projects
