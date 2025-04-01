import React, { useState } from 'react';
import '../style/css/components/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  

  return (
    <>
     <div className='nav-bar-layout'>
      <nav className="navbar">
        <strong className='link-title'>PROFIL</strong>
        
        <NavLink className={({ isActive }) => isActive ? 'nav-bar-link active' : 'nav-bar-link'} to='/'>OM MIG</NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'nav-bar-link active' : 'nav-bar-link'} >KONTAKTA MIG</NavLink>
        
      </nav>
      <nav className="navbar">
        <strong className='link-title'>UTBILDNINGAR</strong>
        <NavLink className='nav-bar-link' to='/webbutvecklare'>WEBBUTVECKLARE .NET</NavLink>
        <NavLink className='nav-bar-link' to='/campus-varberg'>Yrkeshögskola CAMPUS VARBERG</NavLink>
        <NavLink className='nav-bar-link' to='/el-utbildning'>EL-UTBILDNING INSTALLATION/INDUSTRI</NavLink>
        <NavLink className='nav-bar-link' to='/gymnasiet'>SAMHÄLLSVETENSKAPLIG-LINJE</NavLink>
      </nav>
      <nav className="navbar">
        <strong className='link-title'>ERFARENHET</strong>
        <NavLink className='nav-bar-link' to='/granitor'>ELEKTRIKER GRANITOR AB</NavLink>
        <NavLink className='nav-bar-link' to='/wellspect'>UNDERHÅLLSTEKNIKER - WELLSPECT HEALTHCARE</NavLink>
        <NavLink className='nav-bar-link' to='/kungsbacka'>INDUSTRIELEKTRIKER KUNGSBACKA KOMMUN</NavLink>
        <NavLink className='nav-bar-link' to='/gryaab'>DRIFTTEKNIKER - GRYAAB</NavLink>
        <NavLink className='nav-bar-link' to='/walter-hansson'>ELEKTRIKER - WALTER HANSSON ELAB</NavLink>
        <NavLink className='nav-bar-link' to='/extra'>ÖVRIGA ANSTÄLLNINGAR</NavLink>
        
      </nav>
     
    </div>
   
    </>
   
    
  
    
  );
}

export default Navbar;
