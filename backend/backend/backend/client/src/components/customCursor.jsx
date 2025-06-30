import React, { useEffect, useState, useRef } from 'react';
import '../styles/Cursor.css';

function CustomCursor() {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(window.innerWidth > 600);

  useEffect(() => {
    const cursor = cursorRef.current;
    // Track the real cursor
    let mouseX = 0, mouseY = 0;
    //  Track The Animated Circle
    let currentX = 0, currentY = 0;

    const updatePosition = () => {
      if (cursor && isVisible) {
        const speed = 0.1;
        currentX += (mouseX - currentX) * speed;
        currentY += (mouseY - currentY) * speed;
        cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      setIsVisible(window.innerWidth > 600);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    updatePosition();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isVisible]);

  return isVisible ? <div className="custom-cursor" ref={cursorRef}></div> : null;
}

export default CustomCursor;