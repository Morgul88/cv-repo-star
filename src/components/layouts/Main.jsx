import React from 'react';
import '../../style/css/layouts/Main.css';
import About from '../About';

const Main = () => {
  return (
    <section className="main-section">
      <h1>HENRIK STARANDER</h1>
      <h1>Studerande - Webbutveckling inom .NET</h1>

      <h2>Kontaktuppgifter:</h2>
      <ul>
        <li><strong>Adress:</strong> Frillesås mellanväg 5, Frillesås</li>
        <li><strong>E-post:</strong> <a href="mailto:staranderh@gmail.com">staranderh@gmail.com</a></li>
        <li><strong>Telefon:</strong> 0733290932</li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/henrik-starander-1493b3280" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/Morgul88" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>

      <h2>Utbildning:</h2>
      <ul>
        <li><strong>Webbutvecklare .NET</strong>, EC-Utbildning Göteborg (2023-2025)</li>
        <li><strong>Yrkeshögskola Campus Varberg:</strong> Drifttekniker - Biogas och Vattenrening (2013-2015)</li>
        <li><strong>El-utbildning Installation/Industri</strong> (2010-2011)</li>
        <li><strong>Samhällsvetenskapliga linjen</strong>, Fässbergsgymnasiet, Mölndal (2004-2007)</li>
      </ul>

      <h2>Arbetslivserfarenhet:</h2>
      <ul>
        <li><strong>Elektriker</strong>, Grantior AB (2022-2023)</li>
        <li><strong>Elektriker</strong>, Walter Hansson Elab (2011-2013)</li>
        <li><strong>Underhållstekniker</strong>, Wellspect HealthCare (2020-2022)</li>
        <li><strong>Industri-Elektriker</strong>, Kungsbacka Kommun (2019-2020)</li>
        <li><strong>Drifttekniker</strong>, GRYAAB (2015-2019)</li>
        <li><strong>Driftekniker</strong>, VIVAB Miljö och Vatten AB (Lärande i arbete)</li>
        <li><strong>Montör</strong>, Emballage Teknik AB</li>
        <li><strong>Administatör</strong>, Astra Zeneca (Sommarjobb)</li>
        <li><strong>Byggprojekt</strong> i Göteborg och Industri-Elektriker på Ringhals</li>
      </ul>
    </section>
  );
};

export default Main;
