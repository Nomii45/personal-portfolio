import React from 'react';
import '../styles/project.css';
import Google from '../assets/google.png';
import ChatApp from '../assets/chat.png';
import Portfolio from '../assets/portfolio.png';

function Projects() {
  const projects = [
    {
      title: 'Google Clone',
      category: 'google',
      Image: Google,
      link: 'https://your-google-clone.vercel.app/' 
    },
    {
      title: 'PulseTalk',
      category: 'Chat app',
      Image: ChatApp,
      link: 'https://pulse-talk-mern-stack-chat-app.vercel.app/' 
    },
    {
      title: 'Personal Portfolio',
      category: 'Portfolio',
      Image: Portfolio,
      link: 'https://nouman-naqbool-portfolio.vercel.app/' 
    }
  ];

  return (
    <section className='projects-section'>
      <h2 className='section-title'>Feature Projects</h2>
      <p className='tag'>
        Explore a selection of my recent work showcasing innovative solutions and technical expertise.
      </p>
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div key={index} className='project-card'>
            <div className='project-image'>
              <img src={project.Image} alt={project.title} />
              <div className='overlay'>
                <p>{project.category}</p>
              </div>
            </div>
            <div className='projects-btn'>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='demo'
              >
                LiveDemo
              </a>
            </div>
            <h3 className='project-title'>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
