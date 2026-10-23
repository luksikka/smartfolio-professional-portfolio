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
            As a seasoned Business Consultant with over a decade of experience, I specialize in 
            financial auditing, corporate governance, and strategic business transformation. My expertise 
            spans across comprehensive audit services, risk management, compliance advisory, and M&A due diligence.
          </p>
          <p className="about-paragraph">
            I partner with organizations to optimize their operations, strengthen internal controls, 
            ensure regulatory compliance, and drive sustainable growth. My approach combines deep financial 
            acumen with strategic thinking to deliver measurable results and lasting value.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <h3>12+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>80+</h3>
              <p>Audits Completed</p>
            </div>
            <div className="stat-item">
              <h3>45+</h3>
              <p>Corporate Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
