import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2>📩 Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-details">
          <h3>📍 Contact Information</h3>
          <p><strong>Name:</strong> Harini Rayappan</p>
          <p><strong>Email:</strong> harini200524@gmail.com</p>
          <p><strong>Phone:</strong> +91-9344240544</p>
          <p><strong>Linkedin:</strong> 
            <a href='https://www.linkedin.com/in/harini-r-84a30325a/'>
              www.linkedin.com/in/harini-r-2401-2k5
            </a>
          </p>
          <p><strong>Location:</strong> No. 6, Opposite Sub-Collector Bungalow, Hosur, Krishnagiri, Tamil Nadu, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
