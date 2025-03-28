import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import Main from './components/layouts/Main'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'

function App() {
  

  return (
    
    <>
    <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={ <About />} />
        
        </Routes>
      </main>
    <Footer />
    </>
  )
}

export default App
