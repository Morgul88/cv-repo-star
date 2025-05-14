import React, { useState, useEffect } from 'react';
import '../../style/css/layouts/Footer.css';

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
      <div className="footer-content">
        
        
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
        {cleared  ? <p className='clear-cookie'>Cookies has been cleared</p>: null}
        <ul className="footer-links">
          {cookieStatus === true ? <li><a cursor="pointer" onClick={clearCookies}>Clear cookies</a></li> : null}
          <li><a href="/cookiesconsent">Privacy Policy</a></li>
          
          
        </ul>
        
        
      </div>
    </footer>
  );
};

export default Footer;
