import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import useSound from "use-sound";

export default function NavBar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [playClick] = useSound('/sounds/click.wav', {
    volume: 0.3,
    onplayerror: () => {},
  });

  const handleMenuToggle = () => {
    playClick();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNav = (section) => {
    setIsMenuOpen(false);
    if (isHome && scrollToSection) {
      scrollToSection(section);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 0) {
        setIsHidden(false);
      } else if (Math.abs(currentY - lastScrollY.current) > 5) {
        setIsHidden(currentY > lastScrollY.current);
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects',   section: 'projects' },
    { label: 'Tech Stack', section: 'techstack' },
    { label: 'About',      section: 'about' },
    { label: 'Connect',    section: 'connect' },
  ];

  return (
    <>
    <header
      className={`sticky top-0 z-50 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[200px] 2xl:px-[250px] py-5 md:py-6 transition-transform duration-300 ease-in-out ${
        isHidden && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/">
            <p
              className="font-sans text-[20px] md:text-[24px] font-medium leading-[117%] text-black hover:opacity-70 transition-opacity duration-200"
              style={{ letterSpacing: '-3%' }}
            >
              Babatems
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Hamburger */}
          <div className="md:hidden relative z-50">
            <button
              className={`text-black p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black ${
                isMenuOpen ? '' : 'rounded-full border border-neutral-200 bg-white/80 backdrop-blur-md'
              }`}
              onClick={handleMenuToggle}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
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

          {/* Desktop nav pill */}
          <div className="hidden md:block">
            <ul
              className="flex items-center gap-6 rounded-full border border-neutral-200 bg-cover bg-center px-6 py-2.5"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(/images/nav-bg.jpg)",
              }}
            >
              {navItems.map(({ label, section }) => (
                <li key={section}>
                  {isHome ? (
                    <button
                      className="font-sans font-medium text-[15px] leading-[120%] hover:opacity-60 transition-opacity duration-200"
                      style={{ letterSpacing: '-3%' }}
                      onClick={() => handleNav(section)}
                    >
                      {label}
                    </button>
                  ) : (
                    <Link
                      to="/"
                      className="font-sans font-medium text-[15px] leading-[120%] hover:opacity-60 transition-opacity duration-200 block"
                      style={{ letterSpacing: '-3%' }}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>

      {/* Mobile full-screen menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen}
      >
          {navItems.map(({ label, section }) => (
            isHome ? (
              <button
                key={section}
                className="font-sans font-medium text-[24px] leading-[120%] text-black"
                style={{ letterSpacing: '-3%' }}
                onClick={() => handleNav(section)}
              >
                {label}
              </button>
            ) : (
              <Link
                key={section}
                to="/"
                className="font-sans font-medium text-[24px] leading-[120%] text-black"
                style={{ letterSpacing: '-3%' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            )
          ))}
      </div>
    </>
  );
}
