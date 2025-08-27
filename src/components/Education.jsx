import React from 'react';
import '../style/css/components/Education.css';
import { NavLink } from 'react-router-dom';

const educations = [
  {
    title: 'Webbutvecklare .NET',
    school: 'EC-Utbildning Göteborg',
    period: '2023-2025',
    description: 'HTML & CSS, JavaScript Frontend, C#, Datalagring, ASP.NET, Blazor, Azure, CMS, Projekt'
  },
  {
    title: 'Drifttekniker - Biogas och Vattenrening',
    school: 'Yrkeshögskola Campus Varberg',
    period: '2013-2015'
  },
  {
    title: 'El-utbildning Installation/Industri',
    school: 'Academedia, Mölndal',
    period: '2010-2011'
  },
  {
    title: 'Samhällsvetenskapliga linjen',
    school: 'Fässbergsgymnasiet, Mölndal',
    period: '2004-2007'
  }
];

const Education = () => {
  return (
    <div className='education-container'>
      <div className='line-with-dots-edu'></div>
      <div className='education-list'>
        {educations.map((edu, index) => (
          <div key={index} className='education-card'>
            <h3>{edu.title}</h3>
            <p className='school'>{edu.school}</p>
            {edu.period && <p className='period'>{edu.period}</p>}
            {edu.description && <p className='description'>{edu.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
