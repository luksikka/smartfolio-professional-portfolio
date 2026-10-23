import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Consultant & DEO',
      company: 'Leading Consulting Firm',
      period: '2020 - Present',
      description: 'Leading strategic consulting projects and ensuring ethical data governance across the organization.',
      achievements: [
        'Implemented data ethics framework for 50+ projects',
        'Increased client satisfaction by 35%',
        'Led team of 10+ consultants'
      ]
    },
    {
      role: 'Business Consultant',
      company: 'Global Advisory Services',
      period: '2016 - 2020',
      description: 'Provided business analysis and strategic recommendations to Fortune 500 companies.',
      achievements: [
        'Delivered 30+ successful projects',
        'Improved operational efficiency by 25%',
        'Managed stakeholder relationships across multiple regions'
      ]
    },
    {
      role: 'Junior Analyst',
      company: 'Tech Solutions Inc.',
      period: '2014 - 2016',
      description: 'Conducted data analysis and supported senior consultants in project delivery.',
      achievements: [
        'Developed analytical frameworks',
        'Contributed to 15+ successful implementations',
        'Recognized for outstanding performance'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
        <div className="title-underline"></div>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="exp-role">{exp.role}</h3>
              <div className="exp-meta">
                <span className="exp-company">{exp.company}</span>
                <span className="exp-period">{exp.period}</span>
              </div>
              <p className="exp-description">{exp.description}</p>
              <ul className="exp-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
