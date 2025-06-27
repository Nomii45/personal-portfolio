import React, { useEffect, useState, useRef } from 'react';
import '../styles/stats.css';
import { FaProjectDiagram, FaUsers } from 'react-icons/fa';

// ✅ Custom Hook
function useCountUp(end, duration, startCount) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const step = Math.ceil(end / (duration / 16));

    const interval = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start);
    }, 16);

    return () => clearInterval(interval);
  }, [startCount, end, duration]);

  return count;
}

function Stats() {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const projectCount = useCountUp(100, 10000, startCount); // end=100, duration=1000ms
  const reviewCount = useCountUp(10000, 4000, startCount);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="stats-wrapper">
        <div className="stat-card">
          <FaProjectDiagram className="stat-icon" />
          <h2 className="stat-number">{projectCount}+</h2>
          <p className="stat-label">Completed Projects</p>
        </div>
        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <h2 className="stat-number">{reviewCount.toLocaleString()}+</h2>
          <p className="stat-label">Client Reviews</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
