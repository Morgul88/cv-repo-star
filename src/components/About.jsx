import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import '../style/css/components/About.css';
import Timetag from './tag/Timetag';
import TimelineKnobs from './TimelineKnobs'; 

const About = () => {
  const [version, setVersion] = useState('LÅNG VERSION'); 
  
  return (
    <section className='about content-text'>
      <TimelineKnobs version={version} setVersion={setVersion}/>

      
      
      
      <h2 className='info-title'>BAKGRUND</h2>

      {version === 'LÅNG VERSION' ? 
        <>
          <p>
            Studerar till Webb­utvecklare inom .NET på EC-Utbildning i Göteborg. Under utbildningen får vi lära oss grunderna och avancerade aspekter av webbutveckling genom Microsofts .NET-ramverk, programmeringsspråk 
            som C# och tekniker för att skapa robusta webbapplikationer. Vi utvecklar interaktiva webbsidor, cms system, applikationer och gränssnitt mot användare. Utbildningen innehåller kunskap både inom frontend och backend.
          </p>
          
          <p>
            Webbutveckling har blivit en stark passion för mig och är något som inspirerar mig varje dag. Jag har en förmåga att arbeta effektivt i team och uppskattar att kunna bidra med mina kommunikativa och sociala styrkor.
            Jag tror på kraften i samarbete och hur det kan leda till fantastiska resultat när vi delar idéer och löser problem tillsammans. Samtidigt har jag ett intresse för att fördjupa mig på egen hand och utforska nya tekniska trender, 
            vilket gör att jag ständigt förbättrar mina kunskaper. Min utbildning har visat att jag är på rätt väg, och jag ser fram emot att fortsätta växa inom det här området.
          </p>
          <p>
            Jag har en teknisk bakgrund som elektriker och drifttekniker, vilket har gett mig en bred erfarenhet av att arbeta med 
            avancerade system inom industriell automation, elinstallation och underhåll. I dessa roller har jag haft ett stort ansvar 
            för att säkerställa att system fungerar optimalt och att eventuella fel åtgärdas snabbt och effektivt.  
          </p>
          <p>
            Som elektriker arbetade jag med både installation och service, där jag ofta fick lösa komplexa problem i högt tempo. 
            Det krävde noggrannhet, analytiskt tänkande och förmågan att fatta snabba beslut. Dessutom innebar arbetet 
            täta kundkontakter där jag var tvungen att kommunicera tekniska lösningar på ett tydligt och professionellt sätt.  
          </p>
          <p>
            Min tid som drifttekniker gav mig en ännu djupare förståelse för industriella processer, automation och underhåll.  
            Jag hade en central roll i att säkerställa driften av viktiga system, vilket krävde både proaktivt och reaktivt arbete.  
            Teamwork var en nyckelfaktor, eftersom jag ofta samarbetade med andra tekniker, ingenjörer och operatörer för att lösa 
            tekniska utmaningar.  
          </p>
          <p>
            Dessa erfarenheter har stärkt min problemlösningsförmåga, mitt ansvarstagande och min förmåga att arbeta både självständigt 
            och i grupp. Jag har också utvecklat ett serviceinriktat arbetssätt där jag alltid strävar efter att leverera hög kvalitet och 
            hållbara lösningar, något jag tar med mig in i webbutvecklingsvärlden.
          </p>
          <p>
            Jag bor i Frillesås tillsammans med min fru och våra barn. Jag älskar att röra på mig i alla former, 
            allt från löpning till styrketräning. Teknik har alltid varit ett stort intresse för mig, och så länge jag kan minnas har jag 
            gillat att utforska datorer och teknik på alla möjliga sätt.  
          </p>
          <p>
            Som person är jag nyfiken, social och positiv. Jag har höga ambitioner och drivs av att utvecklas både yrkesmässigt och som människa.  
            Att ständigt lära mig nya saker och bli bättre på det jag gör är något jag verkligen brinner för.  
          </p>
        </>
      : 
        <>
          <p>
            Studerar Webb­utveckling inom .NET på EC-Utbildning i Göteborg och har en bakgrund som elektriker och drifttekniker. 
            Under utbildningen lär jag mig både frontend och backend webbutveckling, inklusive programmering i C# och användning av .NET.
            Jag har utvecklat en passion för webbutveckling och tror på vikten av teamwork och kommunikation. Jag strävar efter att ständigt förbättra mina tekniska färdigheter och ser fram emot att fortsätta växa inom detta område.
          </p>
          <p>
            Tidigare har jag arbetat inom industriell automation och elinstallation. Jag har erfarenhet av problemlösning i högt tempo och har arbetat nära kunder för att leverera tekniska lösningar. Min erfarenhet som drifttekniker har också gett mig djupare förståelse för systemdrift och underhåll.
          </p>
          <p>
            Jag bor i Frillesås med min fru och barn och har alltid haft ett stort intresse för teknik och datorer. Jag älskar att hålla mig aktiv genom löpning och styrketräning.
          </p>
          <p>
            Jag är en nyfiken, social och positiv person som har höga ambitioner och drivs av att ständigt utvecklas både professionellt och personligt.
          </p>
        </>
      }

      
      
      <h3>Utbildning</h3>
      <ul>
        <li><NavLink className='about-link' to='/webbutvecklare'><strong>Webbutvecklare .NET</strong></NavLink> - EC-Utbildning Göteborg (2023-2025)</li>
        <li><NavLink className='about-link' to='/campus-varberg'><strong>Drifttekniker – Biogas och Vattenrening</strong></NavLink> - YH Campus Varberg (2013-2015)</li>
        <li><NavLink className='about-link' to='/el-utbildning'><strong>El-utbildning Installation/Industri</strong></NavLink> - Academedia Mölndal (2010-2011)</li>
        <li><NavLink className='about-link' to='/gymnasiet'><strong>Samhällsvetenskapliga linjen</strong></NavLink> - Fässbergsgymnasiet, Mölndal (2004-2007)</li>
      </ul>

      <h3>Arbetslivserfarenhet</h3>
      <ul>
        <li><NavLink className='about-link' to='/granitor'><strong>Elektriker</strong></NavLink> - Grantior AB (2022-2023) <br /> Byggprojekt i Göteborg & industriell elinstallation på Ringhals.</li>
        <li><NavLink className='about-link' to='/wellspect'><strong>Underhållstekniker</strong></NavLink> - Wellspect HealthCare (2020-2022) <br /> Underhåll på högautomatiserad produktionsanläggning.</li>
        <li><NavLink className='about-link' to='/kungsbacka'><strong>Industri-elektriker</strong></NavLink> - Kungsbacka Kommun (2019-2020) <br /> Elunderhåll och installation inom VA-drift.</li>
        <li><NavLink className='about-link' to='/gryaab'><strong>Drifttekniker</strong></NavLink> - GRYAAB (2015-2019) <br /> Drift- och underhållsarbete på Göteborgs reningsverk.</li>
        <li><NavLink className='about-link' to='/extra'><strong>Övriga anställningar & Kunskaper</strong></NavLink></li>
      </ul>
      
      <h3>Tekniska kunskaper</h3>
      <ul>
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
        <li><strong>Backend:</strong> C#, ASP.NET, Blazor</li>
        <li><strong>Databaser:</strong> SQL, Datalagring</li>
        <li><strong>Moln:</strong> Microsoft Azure</li>
        <li><strong>Övrigt:</strong> CMS, Fullstack-utveckling</li>
      </ul>

      <h3>Språk</h3>
      <ul>
        <li>Svenska – Modersmål</li>
        <li>Engelska – Flytande i tal och skrift</li>
      </ul>
    </section>
  );
};

export default About;
