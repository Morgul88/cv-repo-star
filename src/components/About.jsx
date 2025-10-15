import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import '../style/css/components/About.css';
import Timetag from './tag/Timetag';
import TimelineKnobs from './TimelineKnobs'; 
import map from '../assets/map.svg';
import profile from '../assets/profile-pic2.jpg';
import name from '../assets/text-1756285776974.png';

const About = () => {
  const [version, setVersion] = useState('KORT VERSION'); 
  
  return (
    <div className='about'>
      <div className='main-story'>
       <div className='profile-name'>
        <img className='name' src={name} alt="" />
        
        <h2>WEB DEVELOPER </h2>
        <div className='tags'>
            <p>#HTML&CSS</p>
            <p>#JAVASCRIPT</p>
            <p>#REACT</p>
            <p>C#</p>
            <p>#SQL</p>
            <p>#ASP.NET</p>
            <p>#FRONTEND</p>
            <p>#BACKEND</p>
            <p>#CMS</p>
            <p>#AZURE</p>
            <p>#BLAZOR</p>
        </div>
        <div className='about-tag'>
           <p >"I am passionate about web development and constantly strive to create efficient and engaging web applications. 
          <br/>Exploring new technologies and improving my skills in both frontend and backend development inspires me every day."</p>
          <div className='resume' >
             <a href="/CVH.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title='Ladda ner cv'>Download Resume</a>
          </div>
       
        </div>
       
      </div>

        <img className='map' src={map} alt="Map" />
        <div className='profile-picture'>
           <img src={profile} alt="Profile" />
        </div>

       
      </div>

      
    
    </div>
  );
};

export default About;
