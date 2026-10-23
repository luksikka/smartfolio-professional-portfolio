import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Mr. Shalashian</h3>
          <p>Professional Consultant & DEO</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-links">
            <a href="#contact">Contact</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Mr. Shalashian. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
