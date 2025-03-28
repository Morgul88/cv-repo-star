import React, { useState } from 'react';
import '../style/css/components/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Links */}
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li><NavLink className='nav-bar-link' to='/'>Home</NavLink></li>
        <li><NavLink className='nav-bar-link' to='/about'>About</NavLink></li>
        <li><NavLink className='nav-bar-link' to='/services'>Services</NavLink></li>
        <li><NavLink className='nav-bar-link' to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
