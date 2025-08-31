import React from 'react';
import '../style/css/components/Projects.css';
import { NavLink } from 'react-router-dom';
import pic from '../assets/bildCrito.png';
import pics from '../assets/pic2.png';
import pict from '../assets/134.png';

const projects = [
  {
    title: 'JobTracker',
    description: 'En webbapp för att spåra jobbansökningar.',
    tech: ['ASP.NET MVC', 'C#', 'SQL', 'Bootstrap'],
    to: '/project1',
    progress: 'in progress',
    background: pics
  },
  {
    title: 'Portfolio Websites',
    description: 'PLAIN HTML CSS RESPONSIVE SKILLS.',
    tech: ['React', 'CSS', 'HTML'],
    to: 'https://github.com/Morgul88/ReactViteCrito',
    progress: 'in progress',
    background: pic
  },
    {
    title: 'Portfolio Website',
    description: 'A full-stack web application built with ASP.NET Core, featuring a separate API and presentation layer, user authentication with Individual Accounts, and responsive front-end design. Showcases modern web development practices and integration between back-end and front-end components.',
    tech: ['ASP.NET Core', 'Entity Framework', 'SQL Server', 'HTML', 'CSS', 'JavaScript'],
    to: 'https://github.com/Morgul88/Web-App-Mvc',
    progress: 'in progress',
    background: pict
  }
,
  {
    title: 'E-commerce Site',
    description: 'Onlinebutik med kundvagn och betalningsintegration.',
    tech: ['ASP.NET Core', 'Entity Framework', 'Azure'],
    to: '/project3',
    progress: 'in progress',
    background: null
  }
];

const Project = () => {
  return (
    <div className='projects-container'>
      {projects.map((project, index) => (
        <NavLink
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
            <p className='progress'>{project.progress}</p>
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
