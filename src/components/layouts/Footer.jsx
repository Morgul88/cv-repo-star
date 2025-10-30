import React, { useState, useEffect } from 'react';
import '../../style/css/layouts/Footer.css';
import coffee from '../../assets/coffee2.gif';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  const [cookieStatus , SetCookieStatus] = useState();
  const [cleared , SetCleared] = useState(false);
  
  useEffect(() => {
    const stored = localStorage.getItem('terms-status') === 'true';
    console.log(typeof stored === 'boolean')
    SetCookieStatus(stored);
  }, []);
  const clearCookies = (() => {
    const stored = localStorage.setItem('terms-status', 'false');
    SetCookieStatus(stored);
    SetCleared(true);
    document.cookie = "_ga=; Max-Age=0; path=/;";
    document.cookie = "_ga_G-BSJ63JCMQZ=; Max-Age=0; path=/;";
  })
  console.log(cookieStatus)
  return (
    <footer className="footer">
       <div className='form-coffe'>
          
          {/* <div>
             <form className="cv-form">
                  <h2 className="cv-form-title">Kontakta mig</h2>
                  
                  <label className="cv-label" htmlFor="cv-name">Namn</label>
                  <input className="cv-input" type="text" id="cv-name" name="name" placeholder="Ditt namn" required />

                  <label className="cv-label" htmlFor="cv-contact">Kontakt (E-post/Telefon)</label>
                  <input className="cv-input" type="text" id="cv-contact" name="contact" placeholder="E-post eller telefon" required />

                  <label className="cv-label" htmlFor="cv-question">Fråga</label>
                  <textarea className="cv-textarea" id="cv-question" name="message" rows="5" placeholder="Skriv din fråga här" required />

                  <button className="cv-button" type="submit">Skicka</button>
            </form>
          </div> */}
           

       </div>
      
        
      <div className="footer-content .nav-bar-animation-15">
       
        
        <p className="nav-bar-animation-15">&copy; 2025 MyWebsite. All rights reserved.</p>
        {cleared  ? <p className='clear-cookie'>Cookies has been cleared</p>: null}
        <ul className="footer-links">
          {cookieStatus === true ? <li><a className="nav-bar-animation-15" cursor="pointer" onClick={clearCookies}>Clear cookies</a></li> : null}
          <li><NavLink  className="nav-bar-animation-15" to="/cookiesconsent">Privacy Policy</NavLink></li>
          
          
        </ul>
        
        
      </div>
    </footer>
  );
};

export default Footer;
