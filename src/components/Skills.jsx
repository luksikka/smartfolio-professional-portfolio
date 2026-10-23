import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Financial Audit & Analysis', level: 95 },
    { name: 'Business Strategy & Planning', level: 92 },
    { name: 'Risk Management & Compliance', level: 90 },
    { name: 'Corporate Governance', level: 88 },
    { name: 'Process Optimization', level: 93 },
    { name: 'Stakeholder Management', level: 90 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">Professional Skills</h2>
        <div className="title-underline"></div>
      </div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
