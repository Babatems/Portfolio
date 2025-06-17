import React, { useState } from "react";

export default function NavBar({ scrollToSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      <nav
        className="flex items-center px-6 md:px-[250px] py-5 md:pt-[50px] justify-between sticky top-0 z-50"
      >
        {/* Logo Section */}
        <div>
          <a href="/">
            <p className="font-sans text-[24px] md:text-[32px] font-normal leading-[117%]"
              style={{ letterSpacing: '-3%' }}
            >
              Babatems
            </p>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          } absolute top-full left-0 w-full md:relative md:top-0 md:w-auto overflow-hidden md:overflow-visible transition-all duration-300 ease-in-out md:block`}
        >
          <ul className="flex flex-col md:flex-row md:gap-5 items-center">
            <li>
              <button
                className="font-sans font-medium text-[18px] md:text-[21px] leading-[120%] relative hover:underline-effect py-2 md:py-0"
                style={{ letterSpacing: '-3%' }}
                onClick={() => {
                  scrollToSection("home");
                  setIsMenuOpen(false);
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="font-sans font-medium text-[18px] md:text-[21px] leading-[120%] relative hover:underline-effect py-2 md:py-0"
                style={{ letterSpacing: '-3%' }}
                onClick={() => {
                  scrollToSection("about");
                  setIsMenuOpen(false);
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="font-sans font-medium text-[18px] md:text-[21px] leading-[120%] relative hover:underline-effect py-2 md:py-0"
                style={{ letterSpacing: '-3%' }}
                onClick={() => {
                  scrollToSection("techstack");
                  setIsMenuOpen(false);
                }}
              >
                Tech Stack
              </button>
            </li>
            <li>
              <button
                className="font-sans font-medium text-[18px] md:text-[21px] leading-[120%] relative hover:underline-effect py-2 md:py-0"
                style={{ letterSpacing: '-3%' }}
                onClick={() => {
                  scrollToSection("projects");
                  setIsMenuOpen(false);
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="font-sans font-medium text-[18px] md:text-[21px] leading-[120%] relative hover:underline-effect py-2 md:py-0"
                style={{ letterSpacing: '-3%' }}
                onClick={() => {
                  scrollToSection("contact");
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
