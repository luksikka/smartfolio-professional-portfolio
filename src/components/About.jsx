import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-paragraph">
            I am a dedicated professional consultant with extensive experience in delivering 
            strategic solutions and driving organizational success. As a DEO (Data Ethics Officer), 
            I specialize in ensuring ethical data practices while maximizing business value.
          </p>
          <p className="about-paragraph">
            My approach combines analytical rigor with creative problem-solving, enabling me to 
            tackle complex challenges and deliver measurable results. I am passionate about 
            leveraging technology and data to create positive impact.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
