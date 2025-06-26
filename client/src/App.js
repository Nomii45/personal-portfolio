import Navbar from './components/Navbar';
import CustomCursor from './components/customCursor';
import HeroSection from './components/heroSection';
import ProjectSection from './components/projects'
import Services from './components/service'
import Stats from './components/stats'
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';
// import './App.css'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <section id="home"><HeroSection /></section>
      <section id="projects"><ProjectSection /></section>
      <section id="service"><Services /></section>
      <Stats />
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

export default App;
