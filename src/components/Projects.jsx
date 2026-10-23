import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Company Registration & Incorporation',
      category: 'Registration',
      description: 'Facilitated complete company registration process for 25+ startups and businesses including name approval, MOA/AOA drafting, ROC filing, and obtaining DIN, PAN, TAN for smooth business setup.',
      tags: ['Company Registration', 'ROC Filing', 'Incorporation']
    },
    {
      title: 'GST Registration & Returns Filing',
      category: 'Tax Services',
      description: 'Provided GST registration and monthly/quarterly returns filing services for 50+ businesses, ensuring timely compliance and maximizing input tax credit benefits.',
      tags: ['GST Registration', 'GSTR Filing', 'Tax Compliance']
    },
    {
      title: 'Tax Audit & Assessment Support',
      category: 'Tax Audit',
      description: 'Conducted tax audit under Section 44AB for corporate clients with turnover above ₹1 Crore, ensuring Income Tax compliance and representing clients before tax authorities.',
      tags: ['Tax Audit', 'Income Tax', 'Assessment']
    },
    {
      title: 'Annual ROC Compliance Management',
      category: 'ROC Compliance',
      description: 'Managed complete annual ROC compliance for 40+ companies including filing of financial statements (AOC-4), annual returns (MGT-7), board resolutions, and maintaining statutory registers.',
      tags: ['ROC Compliance', 'Annual Returns', 'MCA Filing']
    },
    {
      title: 'Bookkeeping & Accounting Services',
      category: 'Accounting',
      description: 'Provided comprehensive bookkeeping and accounting services including ledger maintenance, bank reconciliation, financial statements preparation, and MIS reporting for SMEs.',
      tags: ['Bookkeeping', 'Accounting', 'Financial Reports']
    },
    {
      title: 'Business Licensing & MSME Registration',
      category: 'Licensing',
      description: 'Assisted businesses in obtaining essential licenses including Trade License, MSME/Udyam Registration, IEC, FSSAI, Professional Tax, and industry-specific regulatory approvals.',
      tags: ['Business Licensing', 'MSME Registration', 'Permits']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-category">{project.category}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
