import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import '../style/css/components/About.css';
import Timetag from './tag/Timetag';
import TimelineKnobs from './TimelineKnobs'; 
import map from '../assets/map.svg';
import profile from '../assets/bildsvart.png';
import name from '../assets/text-1756285776974.png';
import coffee from '../assets/coffe123.gif';

const About = () => {
  const [version, setVersion] = useState('KORT VERSION'); 
  
  return (
    <div className='about'>
      <img className='map' src={map} alt="Map" />
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
            <p className='tag-width'>"I am passionate about web development and constantly strive to create <br></br>efficient and engaging web applications. 
            Exploring new technologies and<br></br> improving my skills in both frontend and backend development<br></br> inspires me every day."</p>
            <div className='resume' >
              <a href="/CVN.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title='Ladda ner cv'>Download Resume</a>
            </div>
            <div className='profile-picture'>
            <img src={profile} alt="Profile" />
            </div>
          </div>
        
        </div>
        
        
       
      </div>
       
      <div className='coffee-talk'>
          <div className='coffee-guy'>
            
            <img src={coffee} alt="" />
              <p>"Hey man, Welcome to my website, lets have a chat over some coffee. 
              Why dont you download my resume so we can get to know eachother. Just click on the button right next to me
              Or maybe you wanna check out my projects, be my guest.

              Hope your having a wonderful day"</p>
          </div>
       
      </div>
      
    </div>
    
  );
};

export default About;
