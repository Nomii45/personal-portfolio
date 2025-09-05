import React, { useState, useEffect, useRef } from "react";
import profileImage from "../assets/pic.png";
import resumePDF from "../assets/cv.pdf";
import { FaDownload } from "react-icons/fa";
import ThreeBackground from "./ThreeBackground";
import CosmosBackground from "./CosmosBackground";

function HeroSection() {
  const [animate, setAnimate] = useState(false);
  const imageRef = useRef(null);

  // Trigger entrance animation after mount
  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  // Typing effect state
  const words = ["WEB DEVELOPER", "CREATIVE DESIGNER", "PROBLEM SOLVER"];
  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150;
    const nextWord = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentWord(nextWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === nextWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setCurrentWord(nextWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  // === Tilt Effect ===
  const handleMouseMove = (e) => {
    const card = imageRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = () => {
    const card = imageRef.current;
    if (card) {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between 
             px-4 sm:px-6 md:px-10 pt-28 md:pt-32 pb-16 
             bg-base-100/60 backdrop-blur-sm text-base-content 
             overflow-hidden"
      >
        <ThreeBackground className="blur-sm" />
        <div className="absolute inset-0 -z-10">
          <CosmosBackground />
          <div className="absolute inset-0 bg-base-100/40 backdrop-blur-[2px]"></div>
        </div>
        {/* Floating Background Blobs */}
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-28 h-28 sm:w-36 sm:h-36 bg-secondary/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-accent/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

        {/* Left Content */}
        <div
          className={`flex-1 text-center md:text-left z-10 transform transition-all duration-1000 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg animate-slide-in-left">
            HI, I'M <span className="text-primary">NOUMAN!</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 animate-slide-in-right">
            A{" "}
            <span className="text-secondary transition-all duration-300">
              {currentWord}
              <span className="animate-blink">|</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl opacity-80 mb-8 max-w-lg sm:max-w-xl mx-auto md:mx-0 leading-relaxed animate-fade-in-up">
            Creative MERN Stack Developer blending clean code with aesthetic
            design. Skilled in building fast, user-centric web apps using React,
            Node.js, and MongoDB. Passionate about crafting smooth UI/UX and
            constantly evolving with new tech trends.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transform transition-all duration-1000 ${
              animate
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-primary-focus transition-all duration-500 transform hover:scale-110 hover:shadow-lg rounded-lg text-primary-content font-semibold"
            >
              Check Resume
            </a>
            <a
              href={resumePDF}
              download
              className="flex items-center justify-center px-6 py-3 bg-secondary hover:bg-secondary-focus transition-all duration-500 transform hover:scale-110 hover:shadow-lg rounded-lg text-secondary-content font-semibold"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
          </div>
        </div>

        {/* Right Image with Tilt */}
        <div
          className={`flex-1 flex justify-center mt-10 md:mt-0 relative z-10 transition-all duration-1000 ${
            animate ? "scale-100 opacity-100" : "scale-125 opacity-0"
          }`}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          ref={imageRef}
        >
          {/* Glow Behind Image */}
          <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary/40 via-secondary/30 to-accent/40 blur-3xl opacity-70 animate-pulse-slow -z-10"></div>
          <div className="absolute -inset-20 rounded-full bg-primary/10 blur-2xl -z-20"></div>

          <img
            src={profileImage}
            alt="Profile"
            className="w-48 sm:w-64 md:w-96 max-w-full rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)]
            transition-transform duration-500 ease-out
            hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] animate-float"
          />
        </div>
      </section>

      {/* Extra Animations */}
      <style>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease forwards;
        }
        @keyframes slideInLeft {
          from { transform: translateX(-40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease forwards;
        }
        @keyframes slideInRight {
          from { transform: translateX(40px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* Background Blob Animation */
        .animate-blob {
          animation: blob 18s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(25px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}</style>
    </>
  );
}

export default HeroSection;
