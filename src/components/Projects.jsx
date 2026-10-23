import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Data Ethics Framework',
      category: 'Governance',
      description: 'Developed comprehensive data ethics framework for multinational corporation, ensuring compliance and ethical data usage.',
      tags: ['Ethics', 'Compliance', 'Strategy']
    },
    {
      title: 'Digital Transformation',
      category: 'Consulting',
      description: 'Led digital transformation initiative for enterprise client, resulting in 40% operational efficiency improvement.',
      tags: ['Strategy', 'Technology', 'Change Management']
    },
    {
      title: 'Risk Assessment Platform',
      category: 'Analytics',
      description: 'Designed and implemented risk assessment platform for financial services client with predictive analytics.',
      tags: ['Analytics', 'Risk Management', 'Data']
    },
    {
      title: 'Stakeholder Engagement',
      category: 'Management',
      description: 'Managed complex stakeholder engagement across 15+ departments for major organizational restructuring.',
      tags: ['Leadership', 'Communication', 'Strategy']
    },
    {
      title: 'Sustainability Initiative',
      category: 'Strategy',
      description: 'Developed sustainability strategy achieving 30% reduction in organizational carbon footprint.',
      tags: ['Sustainability', 'Strategy', 'Impact']
    },
    {
      title: 'Process Optimization',
      category: 'Operations',
      description: 'Optimized business processes resulting in $2M annual cost savings for manufacturing client.',
      tags: ['Efficiency', 'Operations', 'Cost Reduction']
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
