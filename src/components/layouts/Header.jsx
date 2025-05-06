import React, { useState } from 'react';
import '../../style/css/layouts/Header.css';
import Navbar from '../Navbar';
import profile from '../../assets/profile.jpg';
import map from '../../assets/map.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <img className='map' src={map} alt="Map" />
      <div className='profile-picture'>
        <img src={profile} alt="Profile" />
      </div>

      <div className='title-info'>
        <h1>HENRIK STARANDER</h1>
        <h2>JUNIOR WEBBUTVECKLARE INOM<strong> .NET</strong></h2>
        <p>#HTML&CSS #JAVASCRIPT C# #SQL #ASP.NET 
        #FRONTEND #BACKEND #CMS #AZURE #BLAZOR #FULLSTACK</p>
      </div>
      <div className='nav-bar-layout-mobile'>
     
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
      </div>
      {/* Hamburgarikonen */}
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Mobilmeny */}
    {menuOpen && (
    <div className="mobile-menu">
        <ul>
          <p>UTBILDNINGAR</p>
          {/* PROFIL */}
          <li><NavLink className="mobile-menu" to='/' onClick={() => setMenuOpen(false)}>BAKGRUND</NavLink></li>

          {/* UTBILDNINGAR */}
          <li><NavLink className="mobile-menu" to='/webbutvecklare' onClick={() => setMenuOpen(false)}>EC-UTBILDNING</NavLink></li>
          <li><NavLink className="mobile-menu" to='/campus-varberg' onClick={() => setMenuOpen(false)}>CAMPUS VARBERG</NavLink></li>
          <li><NavLink className="mobile-menu" to='/el-utbildning' onClick={() => setMenuOpen(false)}>EL-UTBILDNING</NavLink></li>
          <li><NavLink className="mobile-menu" to='/gymnasiet' onClick={() => setMenuOpen(false)}>GYMNASIUM</NavLink></li>
          <p>ERFARENHET</p>
          {/* ERFARENHET */}
          <li><NavLink className="mobile-menu" to='/haldor' onClick={() => setMenuOpen(false)}>HALDOR AB</NavLink></li>
          <li><NavLink className="mobile-menu" to='/granitor' onClick={() => setMenuOpen(false)}>GRANITOR AB</NavLink></li>
          <li><NavLink className="mobile-menu" to='/wellspect' onClick={() => setMenuOpen(false)}>WELLSPECT HEALTHCARE</NavLink></li>
          <li><NavLink className="mobile-menu" to='/kungsbacka' onClick={() => setMenuOpen(false)}>KUNGSBACKA KOMMUN</NavLink></li>
          <li><NavLink className="mobile-menu" to='/gryaab' onClick={() => setMenuOpen(false)}>GRYAAB</NavLink></li>
          <li><NavLink className="mobile-menu" to='/walter-hansson' onClick={() => setMenuOpen(false)}>WALTER HANSSON ELAB</NavLink></li>
          <li><NavLink className="mobile-menu" to='/extra' onClick={() => setMenuOpen(false)}>ÖVRIGA</NavLink></li>
        </ul>
      </div>
    )}

    </header>
  );
}

export default Header;
