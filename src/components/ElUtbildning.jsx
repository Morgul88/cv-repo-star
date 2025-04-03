import React from 'react'
import Timetag from './tag/Timetag'

const ElUtbildning = () => {
  return (
    <div className='education'>
      
      <Timetag value='2010-2011'/>
      
      <h2 className='info-title'>Elektrikerutbildning - Göteborg</h2>
      <p>Den här elektrikerutbildningen ger en solid grund inom elteknik, där du får de färdigheter och den teoretiska kunskap som krävs för att arbeta som elektriker i en mängd olika branscher. Du lär dig både om de tekniska aspekterna av elektriska installationer och om säkerhetsföreskrifter, vilket är avgörande för att kunna utföra arbetet på ett säkert och effektivt sätt.</p>
      
      <p>Under utbildningen lär du dig om installation och drift av elektriska system, inklusive elinstallationer i både privata och kommersiella miljöer. Du får också kunskaper inom styrsystem och automation, vilket gör att du kan arbeta med mer avancerad teknologi som används i industrin och vid byggnation av moderna byggnader.</p>
      
      <p>Utbildningen är också designad för att förbereda dig för arbetslivet genom att erbjuda praktiska moment och projekt där du får jobba med verkliga elinstallationssituationer. Du lär dig att arbeta både självständigt och i team, vilket gör att du är väl förberedd för de krav och utmaningar som arbetsgivare ställer på dagens elektriker.</p>

      <h4>Kurser i utbildningen:</h4>
      <table>
        <thead>
          <tr>
            <th>Ämne</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Projekt och företagande</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Belysningteknik</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Elarbetsmiljö och säkerhet</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Elinstallation grundkurs</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Elmotorstyrning</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Elkompetens A</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Elkompetens B</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Ellära A</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Ellära B</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Växelström trefas</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Digitalteknik A</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Elektroik grundkurs</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Fastighetsautomation A</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Mätteknik A</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Reglerteknik A</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Automationsenheter</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Styrtekniker A</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Styrtekniker B</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Installation och registrering</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Säkerhetssystem</td>
            <td>100</td>
          </tr>
          <tr>
            <td>CAD-Teknik A</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ElUtbildning
