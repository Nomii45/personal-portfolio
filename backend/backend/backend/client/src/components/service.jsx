import React from 'react'
import '../styles/service.css'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Reactt from '../assets/react.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'

const services = [
  {
    title: "Front-End Development",
    icons: [Html, Css, Reactt],
    description: "Building responsive, dynamic, and high-performance websites using modern HTML5, CSS, JavaScript Libraries like React.js."
  },
  {
    title: "Back-End Development",
    icons: [Node, Mongo],
    description: "Creating secure and scalable server-side applications with Node.js, Express, and MongoDB."
  }
]

function Service() {
  return (
    <section className='service-section'>
                <h2 className='section-title'>My Service's</h2>
      <p className='section-tag'>Here’s what I offer to help you build an amazing website presence.</p>
      <div className='service-grid'>
        {services.map((service, index) => (
          <div className='service-card' key={index}>
            <div className="service-icons">
              {service.icons.map((icon, i) => (
                <img key={i} src={icon} alt={`${service.title} icon ${i}`} className='service-icon' />
              ))}
            </div>
            <h2 className='service-title'>{service.title}</h2>
            <p className='service-description'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service;
