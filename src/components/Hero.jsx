import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullName = 'Mr. Shalashian';
  
  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullName.length) {
        setTypedText(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">
            {typedText}
            <span className="cursor">|</span>
          </h1>
          <h2 className="title">Business Consultant & Auditor</h2>
          <p className="description">
            Expert in Financial Auditing, Corporate Governance & Strategic Business Advisory
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="profile-photo-container">
              <img 
                src="/profile.png.jpeg" 
                alt="Mr. Shalashian" 
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="profile-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
