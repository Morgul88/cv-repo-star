import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Main from './components/layouts/Main'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Webbutvecklare from './components/Webbutvecklare'
import Gryaab from './components/Gryaab'
import CampusVarberg from './components/CampusVarberg'
import ElUtbildning from './components/ElUtbildning'
import SGymnasiet from './components/SGymnasiet'
import WalterHansson from './components/WalterHansson'
import KungsbackaKommun from './components/KungsbackaKommun'
import Wellspect from './components/Wellspect'
import Granitor from './components/Granitor'

function App() {
  

  return (
    
    <>
    <Header />
    <div className='layout'>
    
      <Navbar />
      <div className='main-layout'> 
       
      
          <main>
          <section className="main-section">
            <Routes>
              
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              <Route path="/webbutvecklare" element={<Webbutvecklare />} /> 
              <Route path="/gryaab" element={<Gryaab />} /> 
              <Route path="/campus-varberg" element={<CampusVarberg />} /> 
              <Route path="/el-utbildning" element={<ElUtbildning />} /> 
              <Route path="/gymnasiet" element={<SGymnasiet />} />
              <Route path="/walter-hansson" element={<WalterHansson />} />
              <Route path="/kungsbacka" element={<KungsbackaKommun />} />
              <Route path="/wellspect" element={<Wellspect />} />
              <Route path="/granitor" element={<Granitor />} />
            </Routes>
          </section>
         
          </main>
        
      </div>
      
    </div>
    <Footer />
    </>
  )
}

export default App
