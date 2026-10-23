import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Business Consultant & Auditor',
      company: 'Independent Practice',
      period: '2020 - Present',
      description: 'Providing comprehensive audit, taxation, company registration, and business advisory services to corporate clients and SMEs.',
      achievements: [
        'Conducted 80+ financial and tax audits',
        'Facilitated company registration for 50+ businesses',
        'Managed ROC compliance for 60+ companies annually',
        'Achieved 98% client retention rate'
      ]
    },
    {
      role: 'Audit Manager',
      company: 'Premier Audit & Associates',
      period: '2016 - 2020',
      description: 'Led audit teams in conducting statutory audits, internal audits, and tax assessments for diverse industry clients.',
      achievements: [
        'Managed audit engagements worth ₹50 Crore+',
        'Identified cost savings opportunities of ₹10 Crore',
        'Supervised team of 8 audit professionals',
        'Ensured 100% regulatory compliance'
      ]
    },
    {
      role: 'Junior Auditor',
      company: 'Financial Services Group',
      period: '2014 - 2016',
      description: 'Assisted in conducting financial audits, tax filings, and maintaining books of accounts for client organizations.',
      achievements: [
        'Completed 40+ audit assignments',
        'Prepared financial statements and tax returns',
        'Gained expertise in GST and Income Tax laws'
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
