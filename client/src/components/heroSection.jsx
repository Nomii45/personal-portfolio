import React from 'react'
import '../styles/heroSection.css'
import profileImage from '../assets/pic.png'

function heroSection() {
    return (
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
                    <button className='btnDownload'>DOWNLOAD CV</button>
                    {/* <button className='btnVideo'>WATCH THE VIDEO</button> */}
                </div>
            </div>
            <div className='hero-image-wrapper'>
                <div className='image-glow'></div>
                <img className='hero-img' src={profileImage} alt="Nomi" />
            </div>
        </section>
    )
}

export default heroSection