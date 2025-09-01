import React from 'react';
import '../style/css/components/Projects.css';
import { NavLink } from 'react-router-dom';
import pic from '../assets/bildCrito.png';
import pics from '../assets/pic2.png';
import pict from '../assets/134.png';

const projects = [
  {
    title: 'JobTracker',
    description: 'WEB APP FOR TRACKING JOB APPLIANTS',
    tech: ['ASP.NET RAZOR PAGES', 'C#', 'SQL', 'Bootstrap'],
    to: 'https://github.com/Morgul88/JobTracker',
    progress: 'In progress',
    background: pics
  },
  {
    title: 'Portfolio Websites',
    description: 'PLAIN HTML CSS RESPONSIVE SKILLS',
    tech: ['React', 'CSS', 'HTML'],
    to: 'https://github.com/Morgul88/ReactViteCrito',
    progress: 'Complete',
    background: pic
  },
{
  title: 'Portfolio Website',
  description: 'Full-stack ASP.NET Core app with separate API and front-end, JWT authentication, API keys, and responsive design.',
  tech: ['ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'JWT Authentication', 'API Keys', 'HTML', 'CSS', 'Individual Accounts', 'RESTful APIs'],
  to: 'https://github.com/Morgul88/Web-App-Mvc',
  progress: 'Complete',
  background: pict
}


,
  {
    title: 'E-commerce Site',
    description: 'Onlinebutik med kundvagn och betalningsintegration.',
    tech: ['ASP.NET Core', 'Entity Framework', 'Azure'],
    to: '/project3',
    progress: 'In progress',
    background: null
  }
];

const Project = () => {
  return (
    <div className='projects-container'>
      {projects.map((project, index) => (
        <NavLink
          target='_blank'
          key={index}
          to={project.to}
          className='project-card'
        >
          <div className="project-text">
            <h3>{project.title}</h3>
            <p className='description'>{project.description}</p>
            <div className='tech'>
              {project.tech.map((techItem, idx) => (
                <p key={idx} className='tech-item'>{techItem}</p>
              ))}
            </div>
            {project.progress === 'Complete' 
            ? <p className='progress complete'>{project.progress}</p> 
            : <p className='progress in-progress'>{project.progress}</p>}
          </div>
          {project.background && (
            <div 
              className="project-image" 
              style={{ backgroundImage: `url(${project.background})` }}
            />
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default Project;
