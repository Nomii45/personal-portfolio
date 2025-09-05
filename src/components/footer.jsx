import React, { useEffect, useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const footerRef = useRef(null);
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // Footer zoom+fade animation
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

  // Show back-to-top button after scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className={`relative bg-base-200 text-base-content pt-12 pb-6 px-6 md:px-12 transition-all duration-700 ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Address */}
          <div className="p-6 rounded-xl bg-base-100 shadow-lg border-l-4 border-primary hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/20 text-primary">
                <FaMapMarkerAlt size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold">Address</h4>
                <p className="text-sm opacity-80">Satellite Town, Rawalpindi</p>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-xl bg-base-100 shadow-lg border-l-4 border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-500/20 text-green-500">
                <FaPhoneAlt size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold">Let’s Talk</h4>
                <p className="text-sm opacity-80">(+92) 302-0784810</p>
                <p className="text-sm opacity-80">(+92) 341-3315981</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="p-6 rounded-xl bg-base-100 shadow-lg border-l-4 border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-500">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-red-500/20 text-red-500">
                <FaEnvelope size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold">Send Email</h4>
                <a
                  href="mailto:asyncvibes87@gmail.com"
                  className="text-sm hover:text-red-500 transition-colors"
                >
                asyncvibes87@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-6">
          {[
            {
              icon: <FaFacebookF />,
              href: "https://www.facebook.com/share/1AuP1jXpvB/",
              color: "text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]",
            },
            {
              icon: <FaLinkedinIn />,
              href: "https://www.linkedin.com/nouman-maqbool45",
              color: "text-sky-600 hover:shadow-[0_0_15px_rgba(2,132,199,0.8)]",
            },
            {
              icon: <FaGithub />,
              href: "https://github.com/Nomii45",
              color: "text-gray-800 dark:text-gray-200 hover:shadow-[0_0_15px_rgba(31,41,55,0.8)]",
            },
            {
              icon: <FaTwitter />,
              href: "https://x.com/async_vibes?t=qeryZOhF-zdi0_RSlYaU7A&s=08",
              color: "text-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.8)]",
            },
          ].map(({ icon, href, color }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-base-100 shadow-md transition-all duration-500 hover:scale-110 ${color}`}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-base-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          <p>© NoMii 2025 | All Rights Reserved</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#">Terms & Conditions</a>
           
          </div>
        </div>
      </div>

      {/* Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-content shadow-lg transition-all duration-500 transform hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FaArrowUp className="text-xl" />
      </button>
    </footer>
  );
}

export default Footer;
