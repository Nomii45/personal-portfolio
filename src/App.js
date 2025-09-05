import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/customCursor";
import HeroSection from "./components/heroSection";
import ProjectSection from "./components/projects";
import Services from "./components/service";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";
import About from "./components/About";
import CosmosBackground from "./components/CosmosBackground";
import ThreeBackground from "./components/ThreeBackground";
import WhatsAppButton from "./components/wattsapp";

export default function App() {
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "cupcake";
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      {/* Cosmic background always behind */}
      {/* <CosmosBackground />
      <ThreeBackground /> */}
      {/* Foreground content */}
      <WhatsAppButton />
      <div className="relative z-10">
        <CustomCursor />
        <Navbar />

        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
        <section id="service">
          <Services />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}
