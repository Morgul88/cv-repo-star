import React, { useEffect, useState } from 'react'
import '../style/css/components/Cookie.css';

const Cookies = () => {

    useEffect(() => {
      if(localStorage.getItem('terms-status')){
        var banner = document.getElementById('cookie-banner');
        banner.style.display = 'none';
      }
      
    },[]);
    
    const AcceptedTerms = (() => {

      var banner = document.getElementById('cookie-banner');
      banner.style.display = 'none';
      localStorage.setItem('terms-status', 'true');
      location.reload();
    });
    const NeglectedTerms = (() => {
      var banner = document.getElementById('cookie-banner');
      banner.style.display = 'none';
      localStorage.setItem('terms-status', 'false');
      document.cookie = "_ga=; Max-Age=0; path=/;";
      document.cookie = "_ga_G-BSJ63JCMQZ=; Max-Age=0; path=/;";
    })

  return (
    <div className="cookie-banner" id="cookie-banner" >
        <p><strong>Jag använder cookies</strong> för att förbättra din upplevelse och samla in anonym statistik (Google Analytics).</p>
        <button onClick={AcceptedTerms}>Acceptera</button>
        <button onClick={NeglectedTerms}>Neka</button>
        <a href="https://developers.google.com/analytics" target='_blank'>Läs mer</a>
    </div>
  )
}

export default Cookies