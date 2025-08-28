import React, { useState } from 'react';
import '../style/css/components/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import pic2 from '../assets/S1.png';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  

  return (
  <>
    <div className='nav-bar-layout'>
      
      <div className='space-between'>
        
         <nav className="navbar nav-bar-animation-5">
          
          <NavLink
          
          className={({ isActive }) =>
            isActive
              ? 'nav-bar-link active nav-bar-animation-6'
              : 'nav-bar-link nav-bar-animation-6'
          }
          to='/'
        >
          
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'nav-bar-link active nav-bar-animation-6'
              : 'nav-bar-link nav-bar-animation-6'
          }
          to='/project'
        >
          PROJECTS
        </NavLink>
         <NavLink
          className={({ isActive }) =>
            isActive
              ? 'nav-bar-link active nav-bar-animation-6'
              : 'nav-bar-link nav-bar-animation-6'
          }
          to='/education'
        >
          EDUCATION
        </NavLink>
         <NavLink
          className={({ isActive }) =>
            isActive
              ? 'nav-bar-link active nav-bar-animation-6'
              : 'nav-bar-link nav-bar-animation-6'
          }
          to='/experience'
        >
          EXPERIENCE
        </NavLink>
         

      </nav>

      </div>
      <div className='space-right'>
          <a
          className='hover nav-bar-animation-1'
          href="https://github.com/Morgul88"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        
        <a
          className='hover nav-bar-animation-2'
          href="https://www.linkedin.com/in/henrik-starander-1493b3280"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          className='hover nav-bar-animation-3'
          href="mailto:staranderh@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          className='hover nav-bar-animation-4'
          href="/CVH.pdf"
          target="_blank"
          rel="noopener noreferrer"
          title='Ladda ner cv'
        >
          <i className="fa-solid fa-download"></i>
        </a>
      </div>
     
   
    </div>
    
  </>
);

}

export default Navbar;
