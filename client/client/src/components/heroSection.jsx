// import React from 'react'
// import '../styles/heroSection.css'
// import profileImage from '../assets/pic.png'

// function heroSection() {
//     return (
//         <section className='hero-section'>
//             <div className='hero-content'>
//                 <h1 className='hero-title'>HI, I'M NOUMAN!</h1>
//                 <h1 id="mern">
//                     MERN STACK&nbsp;
//                     <span className="highlight word-wrapper">
//                         <span className="word developer">DEVELOPER</span>
//                         <span className="word coder">CODER</span>
//                     </span>
//                 </h1>

//                 <p className='hero-summary'>
//                     Creative MERN Stack Developer blending clean code with aesthetic design. Skilled in building fast, user-centric web apps using React, Node.js, and MongoDB. Passionate about crafting smooth UI/UX and constantly evolving with new tech trends.
//                 </p>
//                 <div className='hero-btn'>
//                     <button className='btnDownload'>CHECK Resume</button>
//                     <button className='btnVideo'>Download Resume</button>
//                 </div>
//             </div>
//             <div className='hero-image-wrapper'>
//                 <div className='image-glow'></div>
//                 <img className='hero-img' src={profileImage} alt="Nomi" />
//             </div>
//         </section>
//     )
// }

// export default heroSection


import React, { useState } from 'react';
import '../styles/heroSection.css';
import profileImage from '../assets/pic.png';
import resumeImage from '../assets/cvv.png';
import resumePDF from '../assets/cv.pdf';
import { FaDownload } from "react-icons/fa";

function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setShowModal(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowModal(false);
    }, 300); // match animation duration
  };

  return (
    <>
      <section className='hero-section'>
        <div className='hero-content'>
          <h1 className='hero-title'>HI, I'M NOUMAN!</h1>
          <h1 id="mern">
            MERN STACK&nbsp;
            <span className="highlight word-wrapper">
              <span className="word developer">DEVELOPER</span>
              <span className="word coder">CODER</span>
            </span>
          </h1>

          <p className='hero-summary'>
            Creative MERN Stack Developer blending clean code with aesthetic design. Skilled in building fast, user-centric web apps using React, Node.js, and MongoDB. Passionate about crafting smooth UI/UX and constantly evolving with new tech trends.
          </p>

          <div className='hero-btn'>
            <button className='btnDownload' onClick={openModal}>CHECK Resume</button>
            {/* <a href={resumePDF} download className='btnVideo'>Download Resume</a> */}
            <a href={resumePDF} download className='btnVideo'>
              <FaDownload style={{ marginRight: '8px' }} /> Download Resume
            </a>
          </div>
        </div>

        <div className='hero-image-wrapper'>
          <div className='image-glow'></div>
          <img className='hero-img' src={profileImage} alt="Nomi" />
        </div>
      </section>

      {/* Resume Modal */}
      {showModal && (
        <div className={`resume-modal ${isClosing ? 'fade-out' : 'fade-in'}`}>
          <div className="resume-modal-content">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <img src={resumeImage} alt="Resume Preview" className="resume-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default HeroSection;
