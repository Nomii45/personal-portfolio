import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Service', id: 'service' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="soul-navbar">
      <div className="soul-container">
        <div className="soul-logo">
          No<span>Mii</span>
          <div className="subtext">Creative Soul in Code</div>
        </div>
{/* Menu Icon */}
  <div className="soul-logo"></div>
  <div
    className={`hamburger-svg ${isOpen ? 'open' : ''}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    <svg viewBox="0 0 100 80" width="30" height="30" className="hamburger-icon-svg">
      <rect width="100" height="10" rx="5"></rect>
      <rect y="30" width="100" height="10" rx="5"></rect>
      <rect y="60" width="100" height="10" rx="5"></rect>
    </svg>
  </div>

  <ul className={`soul-links ${isOpen ? 'active' : ''}`}>
    {/* nav links */}
  </ul>


        <ul className={`soul-links ${isOpen ? 'active' : ''}`}>
          {links.map(link => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={(e) => handleScroll(e, link.id)}>
                <span className="glow-hover">
                  <span className="wave-dance">
                    {link.name.split('').map((char, index) => (
                      <span
                        className={`wave-letter ${index % 2 === 0 ? 'up' : 'down'}`}
                        style={{ '--i': index }}
                        key={index}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                </span>
              </a>
            </li>
          ))}
          <li className="soul-cta">
            <a href="#contact">
              <span className='btn'>Hire Me</span>
              <div className="aura"></div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
