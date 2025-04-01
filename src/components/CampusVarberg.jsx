import React from 'react'
import Timetag from './tag/Timetag'
import Education from './Education'

const CampusVarberg = () => {
  return (
    <>
       <div className='education'>
        <Timetag value='2013-2015' />
        <h3>Vatten- och Biogastekniker på Campus Varberg</h3>
        <p>Campus Varberg erbjuder en 2årig YH-utbildning som gör dig väl förberedd för ett tekniskt yrke inom hållbarhet, biogasframställning och vattenrening. Utbildningen förbereder dig för roller som drifttekniker inom biogas, vattenproduktion eller vattenrening, där du får kunskaper i drift, underhåll och reparation av anläggningar samt tekniska processer för rening.</p>

        <h4>Vad du lär dig:</h4>
        <ul>
          <li>Driva och underhålla biogasanläggningar och vattenreningssystem.</li>
          <li>Felsökning och val av processutrustning för reningsteknik.</li>
          <li>Utföra beräkningar och skriva tekniska rapporter.</li>
          <li>Praktisk erfarenhet genom LIA-perioder på arbetsplatser.</li>
        </ul>

      
      </div>
      <Education />
    </>
   
  )
}

export default CampusVarberg
