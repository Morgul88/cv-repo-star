import React from 'react';
import '../style/css/components/Experience.css'; 
import { NavLink } from 'react-router-dom';

const experiences = [
  {
    title: 'Utvecklare, Lärande i arbete',
    company: 'Haldor AB',
    period: '2024-2025',
    
  },
  {
    title: 'Elektriker',
    company: 'Grantior AB',
    period: '2022-2023'
  },
  {
    title: 'Underhållstekniker',
    company: 'Wellspect HealthCare',
    period: '2020-2022'
  },
  {
    title: 'Drifttekniker',
    company: 'GRYAAB',
    period: '2015-2019'
  },
  
  {
    title: 'Elektriker',
    company: 'Walter Hansson Elab',
    period: '2011-2013'
  },
  
  {
    title: 'Montör',
    company: 'Emballage Teknik AB'
  },
  
  
  {
    title: 'Industri-Elektriker',
    company: 'Kungsbacka Kommun',
    period: '2019-2020'
  },
  
];

const Experience = () => {
  return (
    <div className='education-container'>
      <div className='line-with-dots'></div>
      <div className='education-list'>
        {experiences.map((exp, index) => (
          <div key={index} className='education-card'>
            <h3>{exp.title}</h3>
            <p className='school'>{exp.company}</p>
            {exp.period && <p className='period'>{exp.period}</p>}
            {exp.description && <p className='description'>{exp.description}</p>}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Experience;
