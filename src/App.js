import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NavBar from "./NavBar";
import Home from "./sections/Home";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Project from "./sections/Projects";
import Connect from "./sections/Connect";
import Footer from "./sections/Footer";
import { InfiniteSpinner } from "./ui/spinner";
import CustomCursor from "./ui/custom-cursor";
import ProjectsPage from "./pages/ProjectsPage";

function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const techstackRef = useRef(null);
  const projectsRef = useRef(null);
  const connectRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = { home: homeRef, about: aboutRef, techstack: techstackRef, projects: projectsRef, connect: connectRef };
    refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      <NavBar scrollToSection={scrollToSection} />
      <div className="relative min-h-[82vh]">
        <div ref={homeRef} className="absolute inset-x-0 top-1/2 -translate-y-1/2">
          <Home />
        </div>
        <img
          src="/images/character-waving-hello.svg"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute bottom-6 lg:bottom-5 right-4 sm:right-8 md:right-16 lg:right-32 2xl:right-[250px] w-[200px] lg:w-[300px] opacity-0 animate-fade-in [animation-delay:100ms] pointer-events-none select-none"
        />
      </div>

      <div ref={projectsRef}><Project /></div>
      <div ref={techstackRef}><TechStack /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={connectRef}><Connect /></div>
      <hr className="border-t-1 border-black mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-[200px] 2xl:mx-[250px]" />

      <Footer />

      {showBackToTop && (
        <button
          className="fixed bottom-[7.5rem] right-4 sm:right-10 bg-black text-white rounded-full p-3 shadow-lg"
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
      <>
        <CustomCursor />
        <div className="flex justify-center items-center h-screen bg-white">
          <InfiniteSpinner size={50} className="text-black" />
        </div>
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </>
  );
}
