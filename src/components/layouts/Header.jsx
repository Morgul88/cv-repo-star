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

      {/* Hamburgarikonen */}
      <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Mobilmeny */}
      {menuOpen && (
        <div className="mobile-menu">
          
          <ul>
            <li><NavLink className="mobile-menu" to='/' onClick={() => setMenuOpen(false)}>OM MIG</NavLink></li>
            <li><NavLink className="mobile-menu" to='/contact' onClick={() => setMenuOpen(false)}>KONTAKTA MIG</NavLink></li>
            <li><NavLink className="mobile-menu" to='/webbutvecklare' onClick={() => setMenuOpen(false)}>WEBBUTVECKLARE .NET</NavLink></li>
            <li><NavLink className="mobile-menu" to='/campus-varberg' onClick={() => setMenuOpen(false)}>Yrkeshögskola CAMPUS VARBERG</NavLink></li>
            <li><NavLink className="mobile-menu" to='/el-utbildning' onClick={() => setMenuOpen(false)}>EL-UTBILDNING</NavLink></li>
            <li><NavLink className="mobile-menu" to='/gymnasiet' onClick={() => setMenuOpen(false)}>SAMHÄLLSVETENSKAPLIG-LINJE</NavLink></li>
            <li><NavLink className="mobile-menu" to='/granitor' onClick={() => setMenuOpen(false)}>ELEKTRIKER GRANITOR AB</NavLink></li>
            <li><NavLink className="mobile-menu" to='/wellspect' onClick={() => setMenuOpen(false)}>UNDERHÅLLSTEKNIKER - WELLSPECT</NavLink></li>
            <li><NavLink className="mobile-menu" to='/extra' onClick={() => setMenuOpen(false)}>ÖVRIGA ANSTÄLLNINGAR</NavLink></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
