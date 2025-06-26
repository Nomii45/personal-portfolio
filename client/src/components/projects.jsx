import React from 'react'
import '../styles/project.css';
import Google from '../assets/google.png'
import ChatApp from '../assets/chat.png'
import Login from '../assets/login.png'

function projects() {

    const projects = [
        {
            title: 'Google Clone',
            category: 'google',
            Image: Google
        },
        {
            title: 'Social Chat App',
            category: 'Chat app',
            Image: ChatApp,
        },
        {
            title: 'Login Page',
            category: 'Login',
            Image: Login
        }
    ]
    return (
        <section className='projects-section'>
            <h2 className='section-title'>Feature Projects</h2>
            <p className='tag'>Explore a selection of my recent work showcasing innovative solutions and technical expertise.</p>
            <div className='projects-grid'>
                {projects.map((project, index) => (
                    <a href={project.link} target='_blank' key={index} className='project-card'>
                        <div className='project-image'>
                            <img src={project.Image} alt={project.title} />
                            <div className='overlay'>
                                <p>{project.category}</p>
                            </div>
                        </div>
                        <div className='projects-btn'>
                            <button className='demo'>LiveDemo</button>
                        </div>
                        <h3 className='project-title'>{project.title}</h3>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default projects