import React from 'react'
import Timetag from './tag/Timetag'

const ElUtbildning = () => {
  return (
    <div>
      <div className='time-line'>
        <Timetag value='2010-2011'/>
      </div>

      <h2>Elektrikerutbildning - Göteborg</h2>
      <p>Denna elektrikerutbildning ger dig grundläggande och avancerade kunskaper inom elektricitet och energi. Under utbildningen kommer du att läsa både gemensamma kurser och välja en inriktning för att fördjupa dina kunskaper. Här får du lära dig om elektriska system, installation, styrsystem, och mycket mer.</p>
      
      <h3>Gemensamma Kurser</h3>
      <table>
        <thead>
          <tr>
            <th>Ämne</th>
            <th>Kurskod</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Orienteringskurs Studieplanering</td>
            <td>1250</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Datorteknik 1a</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Praktisk ellära</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Elkraftteknik</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Elektromekanik</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Energiteknik</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Fastighetsautomation 1</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Servicekunskap 1</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Elinstallationer</td>
            <td>-</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Elmotorstyrning</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Komvuxarbete El och energi</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Mekatronik 1</td>
            <td>-</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      <h3>Inriktning Industri</h3>
      <table>
        <thead>
          <tr>
            <th>Ämne</th>
            <th>Kurskod</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Robotteknik</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Mät- och styrteknik</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Mät- och reglerteknik</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Programmerbara styrsystem</td>
            <td>-</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      <h3>Inriktning Installation</h3>
      <table>
        <thead>
          <tr>
            <th>Ämne</th>
            <th>Kurskod</th>
            <th>Poäng</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Belysningsteknik</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Kommunikationsnät 1</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Larm-, övervaknings- och säkerhetssystem</td>
            <td>-</td>
            <td>100</td>
          </tr>
        </tbody>
      </table>

      

      <h3>Sammanfattning</h3>
      <p>Totalt poäng: 1650</p>
    </div>
  )
}

export default ElUtbildning
