import React from 'react';
import '../style/css/components/Projects.css';
import { NavLink } from 'react-router-dom';

const projects = [
  {
    title: 'JobTracker',
    description: 'En webbapp för att spåra jobbansökningar.',
    tech: ['ASP.NET MVC', 'C#', 'SQL', 'Bootstrap'],
    to: '/project1',
    progress: 'in progress'
  },
  {
    title: 'Portfolio Websites',
    description: 'HTML och CSS Skills.',
    tech: ['React', 'CSS', 'HTML'],
    to: '/project2',
    progress: 'in progress'
  },
  {
    title: 'E-commerce Site',
    description: 'Onlinebutik med kundvagn och betalningsintegration.',
    tech: ['ASP.NET Core', 'Entity Framework', 'Azure'],
    to: '/project3',
    progress: 'in progress'
  }
];

const Project = () => {
  return (
    <div className='projects-container'>
      {projects.map((project, index) => (
        <NavLink key={index} to={project.to} className='project-card'>
          <h3>{project.title}</h3>
          <p className='description'>{project.description}</p>
          <div className='tech'>
            {project.tech.map((techItem, idx) => (
              <p key={idx} className='tech-item'>{techItem}</p>
            ))}
            
          </div>
          <p>{project.progress}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Project;
