import React from 'react';
import '../style/css/components/Navbar.css'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav className="navbar">
      
      <ul className="nav-links">
        
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink href="#">Services</NavLink></li>
        <li><NavLink href="#">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
