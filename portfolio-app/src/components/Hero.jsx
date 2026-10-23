import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Mr. Shalashian</h1>
          <h2 className="title">Professional Consultant & DEO</h2>
          <p className="description">
            Delivering excellence through strategic insights and innovative solutions
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
                src="/profile.jpg" 
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
