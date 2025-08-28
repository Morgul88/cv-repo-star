import React, { useState } from 'react';
import '../../style/css/layouts/Header.css';
import Navbar from '../Navbar';
import profile from '../../assets/profile-pic2.jpg';
import map from '../../assets/map.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      
      

      
      <div className='nav-bar-layout-mobile'>
     
     <a className='hover' href="https://github.com/Morgul88" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
      <a className='hover' href="https://www.linkedin.com/in/henrik-starander-1493b3280" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a className='hover' href="mailto:staranderh@gmail.com" target="_blank" rel="noopener noreferrer">
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a className='hover' href="/CVS.pdf" target="_blank" rel="noopener noreferrer" title='Ladda ner cv'>
      <i className="fa-solid fa-download"></i>
      </a>
      </div>
      {/* Hamburgarikonen */}
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '☰' : <i class="fa-solid fa-xmark"></i>}
      </div>

      {/* Mobilmeny */}
    {menuOpen && (
    <div className="mobile-menu">
        <ul>
          
          {/* PROFIL */}
          <li><NavLink className="mobile-menu" to='/' onClick={() => setMenuOpen(false)}>ABOUT</NavLink></li>
          <li><NavLink className="mobile-menu" to='/project' onClick={() => setMenuOpen(false)}>PROJECTS</NavLink></li>

          {/* UTBILDNINGAR */}
          <li><NavLink className="mobile-menu" to='/education' onClick={() => setMenuOpen(false)}>EDUCATION</NavLink></li>
          <li><NavLink className="mobile-menu" to='/experience' onClick={() => setMenuOpen(false)}>EXPERIENCE</NavLink></li>
          
          
        </ul>
      </div>
    )}

    </header>
  );
}

export default Header;
