import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NavBar from "./NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Project from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { InfiniteSpinner } from "./ui/spinner";
import ProjectsPage from "./pages/ProjectsPage";

function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const techstackRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = { home: homeRef, about: aboutRef, techstack: techstackRef, projects: projectsRef, contact: contactRef };
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#E5E5E5]">
      <NavBar scrollToSection={scrollToSection} />

      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={techstackRef}><TechStack /></div>
      <div ref={projectsRef}><Project /></div>
      <div ref={contactRef}><Contact /></div>

      <Footer />

      {showBackToTop && (
        <button
          className="fixed bottom-10 right-4 sm:right-10 bg-black text-white rounded-full p-3 shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon style={{ fontSize: '30px' }} />
        </button>
      )}
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#E5E5E5]">
        <InfiniteSpinner size={50} className="text-black" />
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}
