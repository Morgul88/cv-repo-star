import React, { useState, useEffect } from 'react';
import './CookiesConsent.css';

const CookiesConsent = () => {
  const [cookieStatus, setCookieStatus] = useState(null);
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  

  useEffect(() => {
    const storedConsent = localStorage.getItem('terms-status');
    setIsConsentGiven(storedConsent === 'true');
    
  }, []);
  const acceptTerms = () => {
    
    localStorage.setItem('terms-status', 'true');
    setIsConsentGiven(true);
    
  };

  

  const revokeConsent = () => {
    localStorage.setItem('terms-status', 'false');
    setIsConsentGiven(false);
    document.cookie = "_ga=; Max-Age=0; path=/;";
    document.cookie = "_ga_G-BSJ63JCMQZ=; Max-Age=0; path=/;";
    
  };

  return (
    <div className="cookies-consent" >
      <div className="privacy-policy">
        
            <h2>Integritetspolicy och Cookie-policy</h2>
          <p>
            Vi använder cookies och liknande teknologier för att förbättra din upplevelse på vår webbplats och samla in anonym statistik, såsom via Google Analytics. Genom att fortsätta använda vår webbplats godkänner du vår användning av cookies enligt vår <strong>Cookie-policy</strong>.
          </p>
          <p>
            Du har rätt att när som helst återkalla ditt samtycke, vilket innebär att vi inte längre kommer att använda cookies för att spåra din aktivitet på vår webbplats. Om du vill dra tillbaka ditt samtycke, vänligen använd knappen nedan.
          </p>
          <p>
            För mer information om de cookies vi använder och hur vi hanterar din data, vänligen läs vår <strong>Integritetspolicy</strong> och <strong>Cookie-policy</strong>.
          </p>
           
        
       
      </div>
        
        
        

      {isConsentGiven ? (
        <div className="revoke-consent">
          <p>Samtyckte för cookies: Accepterat</p>
          <button onClick={revokeConsent}>Dra tillbaka samtycke</button>
        </div>
      ) : (
        <div className="revoke-consent">
          <p>Samtyckte för cookies: Nekat</p>
          <button onClick={acceptTerms}>Acceptera cookies</button>
         
        </div>
      )}
    </div>
  );
};

export default CookiesConsent;
