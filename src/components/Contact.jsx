import React from 'react'
import ContactForm from './form/ContactForm'

const Contact = () => {
  return (
    <div className='contact content-text'> <h2 className='info-title'>Kontaktuppgifter:</h2>
    <ul>
      <li><strong>Adress:</strong> Frillesås mellanväg 5, Frillesås</li>
      <li><strong>E-post:</strong> <a href="mailto:staranderh@gmail.com">staranderh@gmail.com</a></li>
      <li><strong>Telefon:</strong> 0733290932</li>
      <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/henrik-starander-1493b3280" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><strong>GitHub:</strong> <a href="https://github.com/Morgul88" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    </ul>
    {/* <ContactForm /> */}
    
    </div>

   
  )
}

export default Contact