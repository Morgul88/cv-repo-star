import React, { useState } from 'react';
import '../style/css/components/Navbar.css';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  

  return (
  <>
    <div className='nav-bar-layout'>

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
        href="/CVS.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title='Ladda ner cv'
      >
        <i className="fa-solid fa-download"></i>
      </a>

      <nav className="navbar nav-bar-animation-5">
        <strong className='link-title nav-bar-animation-1'>PROFIL</strong>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'nav-bar-link active nav-bar-animation-6'
              : 'nav-bar-link nav-bar-animation-6'
          }
          to='/'
        >
          BAKGRUND
        </NavLink>
      </nav>

      <nav className="navbar nav-bar-animation-7">
        <strong className='link-title nav-bar-animation-2'>UTBILDNINGAR</strong>
        <NavLink className='nav-bar-link nav-bar-animation-8' to='/webbutvecklare'>
          WEBBUTVECKLING .NET
        </NavLink>
        <NavLink className='nav-bar-link nav-bar-animation-9' to='/campus-varberg'>
          CAMPUS VARBERG
        </NavLink>
        <NavLink className='nav-bar-link nav-bar-animation-10' to='/el-utbildning'>
          EL-UTBILDNING
        </NavLink>
        <NavLink className='nav-bar-link nav-bar-animation-11' to='/gymnasiet'>
          GYMNASIUM
        </NavLink>
      </nav>

      <nav className="navbar nav-bar-animation-12">
        <strong className='link-title nav-bar-animation-3'>ERFARENHET</strong>
        <NavLink className='nav-bar-link nav-bar-animation-13' to='/haldor'>
          HALDOR AB
        </NavLink>
        <NavLink className='nav-bar-link nav-bar-animation-14' to='/granitor'>
          GRANITOR AB
        </NavLink>
        <NavLink className='nav-bar-link nav-bar-animation-15' to='/wellspect'>
          WELLSPECT HEALTHCARE
        </NavLink>
        <NavLink className='nav-bar-link' to='/kungsbacka'>
          KUNGSBACKA KOMMUN
        </NavLink>
        <NavLink className='nav-bar-link' to='/gryaab'>
          GRYAAB
        </NavLink>
        <NavLink className='nav-bar-link' to='/walter-hansson'>
          WALTER HANSSON ELAB
        </NavLink>
        <NavLink className='nav-bar-link' to='/extra'>
          ÖVRIGA
        </NavLink>
      </nav>

    </div>
  </>
);

}

export default Navbar;
