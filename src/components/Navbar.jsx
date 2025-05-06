import React, { useState } from 'react';
import '../style/css/components/Navbar.css';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  

  return (
    <>
     <div className='nav-bar-layout'>
     
     <a className='hover' href="https://github.com/Morgul88" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-github"></i>
      </a>
      <a className='hover' href="https://www.linkedin.com/in/henrik-starander-1493b3280" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a className='hover' href="mailto:staranderh@gmail.com" target="_blank" rel="noopener noreferrer">
        <i class="fa-solid fa-envelope"></i>
      </a>
      <a className='hover' href="/CVS.pdf" target="_blank" rel="noopener noreferrer" title='Ladda ner cv'>
      <i class="fa-solid fa-download"></i>
      </a>
      <nav className="navbar">
        <strong className='link-title'>PROFIL</strong>
        
        <NavLink className={({ isActive }) => isActive ? 'nav-bar-link active' : 'nav-bar-link'} to='/'>BAKGRUND</NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'nav-bar-link active' : 'nav-bar-link'} >KONTAKTA MIG</NavLink>
        
      </nav>
      <nav className="navbar">
        <strong className='link-title'>UTBILDNINGAR</strong>
        <NavLink className='nav-bar-link' to='/webbutvecklare'>EC-UTBILDNING</NavLink>
        <NavLink className='nav-bar-link' to='/campus-varberg'>CAMPUS VARBERG</NavLink>
        <NavLink className='nav-bar-link' to='/el-utbildning'>EL-UTBILDNING</NavLink>
        <NavLink className='nav-bar-link' to='/gymnasiet'>GYMNASIUM</NavLink>
      </nav>
      <nav className="navbar">
        <strong className='link-title'>ERFARENHET</strong>
        <NavLink className='nav-bar-link' to='/haldor'>HALDOR AB</NavLink>
        <NavLink className='nav-bar-link' to='/granitor'>GRANITOR AB</NavLink>
        <NavLink className='nav-bar-link' to='/wellspect'>WELLSPECT HEALTHCARE</NavLink>
        <NavLink className='nav-bar-link' to='/kungsbacka'>KUNGSBACKA KOMMUN</NavLink>
        <NavLink className='nav-bar-link' to='/gryaab'>GRYAAB</NavLink>
        <NavLink className='nav-bar-link' to='/walter-hansson'>WALTER HANSSON ELAB</NavLink>
        
        <NavLink className='nav-bar-link' to='/extra'>ÖVRIGA</NavLink>
        
        
      </nav>
     
    </div>
   
    </>
   
    
  
    
  );
}

export default Navbar;
