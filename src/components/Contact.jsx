import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // React state for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email, message };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent!');
        // Clear form
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Failed to send message');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message');
    }
  };

  return (
    <section className="contact-section">
      <h2>📩 Get in Touch</h2>
      <div className="contact-container">
        <div className="contact-details">
          <h3>📍 Contact Information</h3>
          <p><strong>Name:</strong> Harini Rayappan</p>
          <p><strong>Email:</strong> harini200524@gmail.com</p>
          <p><strong>Phone:</strong> +91-9344240544</p>
          <p><strong>Linkedin:</strong><a href='https://www.linkedin.com/in/harini-r-84a30325a/'>www.linkedin.com/in/harini-r-2401-2k5</a></p>
          <p><strong>Location:</strong> No. 6, Opposite Sub-Collector Bungalow, Hosur, Krishnagiri, Tamil Nadu, India</p>
        </div>
        <div className="contact-form">
          <h3>✉️ Leave a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
