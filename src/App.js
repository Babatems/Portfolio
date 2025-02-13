import React, { useState, useEffect, useRef } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NavBar from "./NavBar";
import Home from "./sections/Home"
import About from "./sections/About"
import TechStack from "./sections/TechStack"
import Project from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // References for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const techstackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll to section function
  const scrollToSection = (section) => {
    switch (section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'techstack':
        techstackRef.current.scrollIntoView({ behavior: 'smooth' });
        break
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#E5E5E5]">
      <NavBar scrollToSection={scrollToSection} />
      
      {/* Sections */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={techstackRef}>
        <TechStack />
      </div>
      <div ref={projectsRef}>
        <Project />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>

      {showBackToTop && (
        <button
          className="fixed bottom-10 right-10 bg-black text-white rounded-full p-3 shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon style={{ fontSize: '30px' }} />
        </button>
      )}
    </div>
  );
}