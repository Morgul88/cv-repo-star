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
import Extra from './components/Extra'
import Haldor from './components/Haldor'
import Cookies from './components/Cookies'
import CookiesConsent from './components/CookiesConsent'
import Project from './components/Project'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  
  const [cookieAccepted , SetCookieAccepeted] = useState(localStorage.getItem("cookieConsent"));

  return (
    
    <>
    <Header /><Navbar />
    <div className='layout'>
    
      
      <div className='main-layout'> 
       
      
          <main>
          
          <section className="main-section">
            <Routes>
              
              <Route path="/" element={<Main />} />
              <Route path="/" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              
            </Routes>
          </section>
         
          </main>
        
      </div>
      
    </div>
    <Cookies></Cookies>
    <Footer />
    </>
  )
}

export default App
