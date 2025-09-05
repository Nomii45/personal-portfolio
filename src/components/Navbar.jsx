import React, { useState, useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaConciergeBell,
  FaCode,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTheme, setActiveTheme] = useState("light");

  // ===== Links =====
  const links = [
    { name: "Home", id: "home", icon: <FaHome /> },
    { name: "About", id: "about", icon: <FaUser /> },
    { name: "Projects", id: "projects", icon: <FaProjectDiagram /> },
    { name: "Service", id: "service", icon: <FaConciergeBell /> },
    { name: "Skills", id: "skills", icon: <FaCode /> },
    { name: "Contact", id: "contact", icon: <FaEnvelope /> },
  ];

  // ===== Theme Handling =====
  const applyTheme = (theme) => {
    setActiveTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
    setDarkMode(theme === "dark");
  };

  const toggleDarkMode = () => {
    applyTheme(darkMode ? "light" : "dark");
  };

  // On mount → load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Smooth transition on theme switch
    document.documentElement.classList.add("transition-colors", "duration-500");
  }, []);

  // ===== Navbar scroll hide/show =====
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-base-100/80 backdrop-blur shadow-lg transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-base-content">
        {/* Logo */}
        <div className="leading-tight">
          <div className="text-2xl font-extrabold">
            No<span className="text-primary">Mii</span>
          </div>
          <div className="text-xs opacity-70">Creative Soul in Code</div>
        </div>

        {/* ===== Desktop Navbar ===== */}
        <ul className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="font-medium hover:text-primary"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn btn-primary text-primary-content">
              Hire Me
            </a>
          </li>

          {/* Theme collection */}
          <li>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn">
                Theme
                <svg
                  width="12"
                  height="12"
                  className="inline-block h-2 w-2 fill-current opacity-60"
                  viewBox="0 0 2048 2048"
                >
                  <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl max-h-64 overflow-y-auto"
              >
                {[
                  "light",
                  "dark",
                  "cupcake",
                  "retro",
                  "valentine",
                  "aqua",
                  "coffee",
                  "luxury",
                  "lofi",
                  "pastel",
                  "fantasy",
                  "wireframe",
                  "black",
                  "luxury",
                  "dracula",
                  "cmyk",
                  "autumn",
                  "business",
                  "acid",
                  "lemonade",
                  "night",
                  "coffee",
                  "winter",
                ].map((t) => (
                  <li key={t}>
                    <button
                      className={`btn btn-sm btn-block justify-start ${
                        activeTheme === t ? "btn-primary" : "btn-ghost"
                      }`}
                      onClick={() => applyTheme(t)}
                    >
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* Mobile Navbar */}
        <div className="md:hidden flex items-center gap-3">
          {/* Day/Night toggle */}
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <FaSun className="text-xl" />
            ) : (
              <FaMoon className="text-xl" />
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-square"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col bg-base-100 px-6 py-4 space-y-3 shadow-lg">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.id)?.scrollIntoView({
                    behavior: "smooth",
                  });
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 font-medium hover:text-primary"
              >
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn btn-primary w-full text-primary-content"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
