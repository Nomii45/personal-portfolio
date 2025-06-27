import React, { useEffect, useRef, useState } from 'react';
import '../styles/skills.css';

const skillData = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 93 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'MongoDB', level: 85 },
];

function Skills() {
  const skillsRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={skillsRef}>
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-tag">A comprehensive overview of my technical expertise and proficiency 
        levels across different technologies and tools.</p>
      <div className="skills-container">
        {skillData.map((skill, i) => (
          <div className="skill-bar" key={i}>
            <div className="skill-bar-label">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="skill-bar-track">
              <div
                className={`skill-bar-fill ${startAnimation ? 'animate' : ''}`}
                style={{ '--skill-level': `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
