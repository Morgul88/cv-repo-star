import React, { useState } from 'react';
import '../style/css/components/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  

  return (
    <div className='nav-bar-layout'>
      <nav className="navbar">
        <strong className='link-title'>PROFIL</strong>
        
        <NavLink className={({ isActive }) => isActive ? 'nav-bar-link active' : 'nav-bar-link'} to='/about'>OM MIG</NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'nav-bar-link active' : 'nav-bar-link'} >KONTAKTA MIG</NavLink>
        
      </nav>
      <nav className="navbar">
        <strong className='link-title'>UTBILDNINGAR</strong>
        <NavLink className='nav-bar-link' to='/webbutvecklare'>WEBBUTVECKLARE .NET</NavLink>
        <NavLink className='nav-bar-link' to='/campus-varberg'>Yrkeshögskola Campus Varberg</NavLink>
        <NavLink className='nav-bar-link' to='/el-utbildning'>El-utbildning Installation/Industri</NavLink>
        <NavLink className='nav-bar-link' to='/gymnasiet'>Samhällsvetenskapliga linjen</NavLink>
      </nav>
      <nav className="navbar">
        <strong className='link-title'>ERFARENHET</strong>
        <NavLink className='nav-bar-link' to='/granitor'>Elektriker Granitor AB</NavLink>
        <NavLink className='nav-bar-link' to='/wellspect'>Underhållstekniker , Wellspect Healthcare</NavLink>
        <NavLink className='nav-bar-link' to='/kungsbacka'>Industri-Elektriker Kungsbacka kommun</NavLink>
        <NavLink className='nav-bar-link' to='/gryaab'>Drifttekniker, Gryaab</NavLink>
        <NavLink className='nav-bar-link' to='/walter-hansson'>Elektriker , Walter Hansson ELAB</NavLink>
      </nav>
      <nav className="navbar">
        <strong className='link-title'>ÖVRIGA ANSTÄLLNINGAR</strong>
        <p className='nav-bar-link'>Drifttekniker, Lärande i arbete, VIVAB </p>
        <p className='nav-bar-link' >Drifttekniker, Gryaab, Sommararbete</p>
        <p className='nav-bar-link' >Montör, Emballage teknik AB</p>
        <p className='nav-bar-link' >Administratör, Astra Zeneca, Sommararbete</p>
        
      </nav>
    </div>
  
    
  );
}

export default Navbar;
