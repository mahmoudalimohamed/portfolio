import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 50) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setScrolledToTop(scrollTop < 50);
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on window resize to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full px-6 py-4 transition-all duration-300 ${
          scrolledToTop && !menuOpen
            ? "h-24 bg-transparent"
            : "h-16 bg-navy/90 shadow-lg backdrop-blur-sm"
        } ${
          scrollDirection === "down" && !scrolledToTop && !menuOpen
            ? "-translate-y-full"
            : "translate-y-0"
        }`}
      >
        <nav className="flex items-center justify-between w-full h-full max-w-[1600px] mx-auto">
          <div className="text-green z-50">
            {/* Hexagon Logo Placeholder */}
            <a href="/" aria-label="Home">
              <svg
                id="logo"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 84 96"
                className="w-10 h-10 fill-none stroke-green stroke-2 hover:fill-green/10 transition-colors"
              >
                <title>Logo</title>
                <g transform="translate(-8.000000, -2.000000)">
                  <g transform="translate(11.000000, 5.000000)">
                    <polygon points="41 0 82 24 82 72 41 96 0 72 0 24" />
                    <text
                      x="28"
                      y="60"
                      fill="#64ffda"
                      fontSize="45px"
                      fontWeight="bold"
                      stroke="none"
                    >
                      B
                    </text>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <ol className="flex gap-8 text-sm font-mono text-lightest-slate">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-green transition-colors"
                  >
                    <span className="text-green mr-1">0{index + 1}.</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ol>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-mono text-green border border-green rounded hover:bg-green/10 transition-colors"
            >
              Resume
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-50 relative flex flex-col justify-center items-end w-8 h-6 space-y-1.5 focus:outline-none group"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-8 h-0.5 bg-green transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-green transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0 w-0" : "opacity-100 w-6 group-hover:w-8"
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-green transition-all duration-300 ease-in-out ${
                menuOpen
                  ? "-rotate-45 -translate-y-2 w-8"
                  : "w-4 group-hover:w-8"
              }`}
            ></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Drawer - Outside header for proper z-index */}
      <div
        className={`fixed inset-0 z-[100] flex justify-end md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-navy/50 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Drawer */}
        <aside
          className={`relative w-[min(75vw,400px)] h-full bg-light-navy flex flex-col items-center transition-transform duration-300 ease-in-out overflow-y-auto ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-green hover:text-white transition-colors focus:outline-none z-10"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col items-center justify-center gap-8 text-center w-full py-24 px-6 min-h-full">
            <ol className="flex flex-col gap-8 text-lg font-mono text-lightest-slate">
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-green transition-colors flex flex-col items-center"
                    onClick={toggleMenu}
                  >
                    <span className="text-green text-sm mb-1">
                      0{index + 1}.
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ol>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-sm font-mono text-green border border-green rounded hover:bg-green/10 transition-colors mt-4"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
