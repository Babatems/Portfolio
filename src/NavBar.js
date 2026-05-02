import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNav = (section) => {
    setIsMenuOpen(false);
    if (isHome && scrollToSection) {
      scrollToSection(section);
    }
  };

  const navItems = [
    { label: 'Home',       section: 'home' },
    { label: 'About',      section: 'about' },
    { label: 'Tech Stack', section: 'techstack' },
    { label: 'Projects',   section: 'projects' },
    { label: 'Contact',    section: 'contact' },
  ];

  return (
    <header className="relative">
      <nav className="flex items-center px-6 sm:px-10 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] py-5 md:pt-[50px] justify-between sticky top-0 z-50 bg-[#E5E5E5]">
        {/* Logo */}
        <div>
          <Link to="/">
            <p
              className="font-sans text-[24px] md:text-[32px] font-normal leading-[117%]"
              style={{ letterSpacing: '-3%' }}
            >
              Babatems
            </p>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div
          className={`${
            isMenuOpen ? 'max-h-screen' : 'max-h-0'
          } absolute top-full left-0 w-full bg-[#E5E5E5] md:relative md:top-0 md:w-auto overflow-hidden md:overflow-visible transition-all duration-300 ease-in-out md:max-h-none`}
        >
          <ul className="flex flex-col md:flex-row md:gap-5 items-center">
            {navItems.map(({ label, section }) => (
              <li key={section}>
                {isHome ? (
                  <button
                    className="font-sans font-medium text-[18px] md:text-[21px] leading-[120%] relative hover:underline-effect py-2 md:py-0"
                    style={{ letterSpacing: '-3%' }}
                    onClick={() => handleNav(section)}
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    to="/"
                    className="font-sans font-medium text-[18px] md:text-[21px] leading-[120%] relative hover:underline-effect py-2 md:py-0 block"
                    style={{ letterSpacing: '-3%' }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
