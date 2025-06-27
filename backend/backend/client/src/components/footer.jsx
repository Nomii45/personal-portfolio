import React, { useEffect, useRef, useState } from 'react';
import '../styles/footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
    const footerRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (footerRef.current) {
            observer.observe(footerRef.current);
        }
    }, []);

    return (
        <footer ref={footerRef} className={`footer-container ${show ? 'zoom-in' : ''}`}>
            <div className="footer-inner">
                {/* Address & Contact Grid */}
                <div className="footer-info-grid">
                    <div className="info-block">
                        <FaMapMarkerAlt className="info-icon" />
                        <div>
                            <h4>Address</h4>
                            <p>Dunya Pur<br />Punjab, Pakistan</p>
                        </div>
                    </div>

                    <div className="info-block">
                        <FaPhoneAlt className="info-icon" />
                        <div>
                            <h4>Let's Talk</h4>
                            <p>(+92) 302‑0784810<br />(+92) 341-3315981</p>
                        </div>
                    </div>

                    <div className="info-block">
                        <FaEnvelope className="info-icon" />
                        <div>
                            <h4 className='send-email'>Send Email</h4>
                            <a href="mailto:nomiuttra4596@gmail.com" className="email-link">
                                <i className="fas fa-envelope"></i>nomiuttra4596@gmail.com
                            </a>

                        </div>
                    </div>
                </div>

                {/* Social icons */}
                {/* <div className="footer-socials">
                    <a href=""><FaFacebookF /></a>
                    <a href=""><FaTwitter /></a>
                    <a href=""><FaLinkedinIn /></a>
                    <a href=''><FaGithub /></a>
                </div> */}

                <ul className='styling-UL'>
                    <li className='styling-list'>
                        <a className='styling-link' href="https://www.facebook.com/share/1AuP1jXpvB/">
                            <i class="fab fa-facebook-f icon"><FaFacebookF/></i>
                        </a>
                    </li>
                    <li className='styling-list'>
                        <a className='styling-link' href="https://www.linkedin.com/nouman-maqbool45">
                            <i class="fab fa-facebook-f icon"><FaLinkedinIn/></i>
                        </a>
                    </li>
                    <li className='styling-list'>
                        <a className='styling-link' href="https://github.com/Nomii45">
                            <i class="fab fa-facebook-f icon"><FaGithub/></i>
                        </a>
                    </li>
                    <li className='styling-list'>
                        <a className='styling-link' href="https://x.com/async_vibes?t=qeryZOhF-zdi0_RSlYaU7A&s=08 ">
                            <i class="fab fa-facebook-f icon"><FaTwitter/></i>
                        </a>
                    </li>
                </ul>


                {/* Bottom links */}
                <div className="footer-bottom">
                    <p className="footer-copy">© NoMii 2024 | All Rights Reserved</p>
                    <div className="footer-policy-links">
                        <a href="#">Terms &amp; Conditions &nbsp; &nbsp;</a> |
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
