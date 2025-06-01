import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../Styles/NavbarStyles.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [showSlideNav, setShowSlideNav] = useState(false);
    const [slideClass, setSlideClass] = useState('slide-in');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, [lastScrollY]);

    const openSlideNav = () => {
        setSlideClass('slide-in');
        setShowSlideNav(true);
    };
    useEffect(() => {
        const handleResize = () => {
            const isNowMobile = window.innerWidth <= 870;
            setIsMobile(isNowMobile);

            if (!isNowMobile && showSlideNav) {
                setShowSlideNav(false);
                setSlideClass('slide-out');
            }
        };

        handleResize(); // run on mount
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [showSlideNav]);

    const closeSlideNav = () => {
        const nav = document.querySelector('.Slidenavbar');
        setSlideClass('slide-out');
        if (nav) {
            nav.classList.remove('slide-in');
            nav.classList.add('slide-out');
        }
    };

    const restartAnimations = (selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.classList.remove('animate');
            void el.offsetWidth; // 🔄 force reflow
            el.classList.add('animate');
        });
    };

    return (
        <div>
            <nav className={`navbar ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}>
                <div className="logo">
                    <Link to="home" smooth={true} duration={500}>Abubakr Hemed</Link>
                </div>
                <ul>
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            onClick={() => restartAnimations('.skills-row')}
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            onClick={() => restartAnimations('.projectCard')}
                        >
                            Projects
                        </Link>
                    </li>

                    <li><Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        onClick={() => restartAnimations('.fade-in-form ')}
                    >
                        Contact</Link></li>
                </ul>

                {/* Hamburger only shows on small screens */}
                {isMobile && (
                    <div className="hamburger">
                        <button onClick={openSlideNav}>
                            <GiHamburgerMenu className="hamburgerBtn" />
                        </button>
                    </div>
                )}
            </nav>

            {showSlideNav && (
                <nav
                    className={`Slidenavbar ${slideClass}`}
                    onAnimationEnd={(e) => {
                        if (e.animationName === 'slideOut') {
                            setShowSlideNav(false);
                        }
                    }}
                >
                    <div className="logo">
                        <Link to="home" smooth={true} duration={500} onClick={closeSlideNav}>
                            Abubakr Hemed
                        </Link>
                        <button onClick={closeSlideNav}>
                            <IoMdClose className="close" />
                        </button>
                    </div>
                    <ul>
                        <li>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    restartAnimations('.skills-row');
                                    closeSlideNav();
                                }}
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="projects"
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    restartAnimations('.projectCard');
                                    closeSlideNav();
                                }}
                            >
                                Projects
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={() => {
                                    restartAnimations('.fade-in-form ');
                                    closeSlideNav();
                                }}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Navbar;
