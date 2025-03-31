import React from 'react'
import '../../style/css/layouts/Header.css'
import Navbar from '../Navbar'
import profile from '../../assets/profile.jpg'
import map from '../../assets/map.svg'


const Header = () => {
  return (
    <header>
      <img className='map' src={map}></img>
      <div className='profile-picture'>
        <img src={profile}></img>
      </div>
      <div className='title-info'>
        <h1>HENRIK STARANDER</h1>
        
        <h2>JUNIOR WEBBUTVECKLARE INOM<strong> .NET</strong></h2>
        <p>#Html&CSS #JavaScript #CSharp #Datalagring #ASP.NET 
        #FrontEnd #BackEnd #CMS #Azure #Blazor #FullStack </p>
        
      </div>
     
    </header>
  )
}

export default Header