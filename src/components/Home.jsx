import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="container-fluid home-container d-flex align-items-start justify-content-evenly">
      <div className="intro-text">
        <h1>Welcome to my portfolio!</h1>
        <h1>Hi, I'm <span className="name-highlight">Harini R</span></h1>
        <p>I'm an aspiring Artificial Intelligence & Machine Learning Engineer.</p>
        <p style={{ marginTop: '1rem', fontStyle: 'inherit' }}>
          <strong>Career Objective:</strong> To grow and develop my skills in Machine Learning while actively contributing to the success and growth of the company in an innovative environment.
        </p>
        <button className="contact-button" onClick={handleContactClick}>
          Contact Me
        </button>
      </div>

      <div className="profile-image">
        <img src="/harini.jpg" alt="Harini R" />
      </div>
    </div>
  );
};

export default Home;
