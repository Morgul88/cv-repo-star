import React, { useState } from 'react';
import '../../style/css/form/ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Formuläret skickat!');
  };

  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <p>Vill du skicka mig ett meddelande? </p>
        <div>
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-post</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit"><i class="fa-solid fa-envelope-open-text"></i></button>
      </form>
    </div>
  );
};

export default ContactForm;
