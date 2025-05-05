import React from 'react'
import Timetag from './tag/Timetag'
import Education from './Education'

const CampusVarberg = () => {
  return (
    <>
       <div className='education content-text'>
        <Timetag value='2013-2015' />
        <h2 className='info-title'>Vatten- och Biogastekniker på Campus Varberg</h2>
        <p>Campus Varberg erbjuder en 2årig YH-utbildning som gör dig väl förberedd för ett tekniskt yrke inom hållbarhet, biogasframställning och vattenrening. Utbildningen förbereder dig för roller som drifttekniker inom biogas, vattenproduktion eller vattenrening, där du får kunskaper i drift, underhåll och reparation av anläggningar samt tekniska processer för rening.</p>

        <h4>Vad du lär dig:</h4>
        <ul>
          <li>Driva och underhålla biogasanläggningar och vattenreningssystem.</li>
          <li>Felsökning och val av processutrustning för reningsteknik.</li>
          <li>Utföra beräkningar och skriva tekniska rapporter.</li>
          <li>Praktisk erfarenhet genom LIA-perioder på arbetsplatser.</li>
        </ul>
        <div>
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
            <td>Biogastekniker för drifttekniker</td>
            <td>-</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Biogasmarknad</td>
            <td>-</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Elteknik för drifttekniker</td>
            <td>-</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Examensarbete</td>
            <td>-</td>
            <td>20</td>
          </tr>
          <tr>
            <td>IT och datorkunskap för drifttekniker</td>
            <td>-</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Lärande i arbete</td>
            <td>-</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Maskinteknik för driftekniker</td>
            <td>-</td>
            <td>35</td>
          </tr>
          <tr>
            <td>Mikrobiologi för vattenrening och biogasproduktion</td>
            <td>-</td>
            <td>15</td>
          </tr>
          <tr>
            <td>Processkemi</td>
            <td>-</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Processteknik</td>
            <td>-</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Reglerteknik för drifttekniker</td>
            <td>-</td>
            <td>17</td>
          </tr>
          <tr>
            <td>Substratkunskap</td>
            <td>-</td>
            <td>25</td>
          </tr>
          <tr>
            <td>Tilllämpad matematik</td>
            <td>-</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Vattenteknik för drifttekniker</td>
            <td>-</td>
            <td>25</td>
          </tr>
          
        </tbody>
      </table>
        </div>
      
      </div>
      
    </>
   
  )
}

export default CampusVarberg
