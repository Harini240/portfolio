import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2 className="section-title">Projects</h2>
         <div className="project-card">
        <h3 className="project-title">Cloud-Based Real-Time Chat Application (Medical Bot)</h3>
        <p><strong>Objective:</strong> Provide health-related support via bot for common medical queries.</p>
        <p><strong>Role:</strong> Developed and integrated Watson Assistant into the chat system.</p>
        <p><strong>Tech:</strong> IBM Watson Assistant, IBM Cloud</p>
        <p><strong>Team Size:</strong> 1 | <strong>Duration:</strong> 2 months</p>
        <a href="https://github.com/Harini240/Cloud-Real-time-chat-application-" target="_blank" rel="noopener noreferrer">
          <button className="view-button">View Project</button>
        </a>
      </div>

      <div className="project-card">
        <h3 className="project-title">Social Media Trend Analysis and Forecast</h3>
        <p><strong>Objective:</strong> Predict social media trends using data modeling.</p>
        <p><strong>Role:</strong> Analyzed patterns using ARIMA and Neural Network models.</p>
        <p><strong>Tech:</strong> IBM SPSS Modeler</p>
        <p><strong>Team Size:</strong> 1 | <strong>Duration:</strong> 2 months</p>
        <a href="https://github.com/Harini240/Social-media-trend-analysis-and-forecast" target="_blank" rel="noopener noreferrer">
          <button className="view-button">View Project</button>
        </a>
      </div>

      <div className="project-card">
        <h3 className="project-title"> Direct Market Access for Farmers</h3>
        <p><strong>Objective:</strong> Connect consumers directly with farmers.</p>
        <p><strong>Role:</strong> Designed and developed frontend UI for product categories.</p>
        <p><strong>Team Size:</strong> 4 | <strong>Duration:</strong> 6 months</p>
        <a href="https://github.com/Harini240/Direct-Market-Access-For-Farmers" target="_blank" rel="noopener noreferrer">
          <button className="view-button">View Project</button>
        </a>
      </div>

      <div className="project-card">
        <h3 className="project-title"> Multilingual Language Translation Platform</h3>
        <p><strong>Objective:</strong> To break language barriers by providing multilingual support.</p>
        <p><strong>Role:</strong> Researched and integrated translation functions.</p>
        <p><strong>Team Size:</strong> 3 | <strong>Duration:</strong> 6 months</p>
        <a href="https://github.com/Harini240/Translator" target="_blank" rel="noopener noreferrer">
          <button className="view-button">View Project</button>
        </a>
      </div>
      
      <div className="project-card">
        <h3 className="project-title">5. My To-Do List</h3>
        <p><strong>Objective:</strong> Help users track and manage their daily tasks effectively.</p>
        <p><strong>Role:</strong> Designed and built a simple HTML-based task manager.</p>
        <p><strong>Team Size:</strong> 1 | <strong>Duration:</strong> 2 days</p>
        <a href="https://github.com/Harini240/My-To-Do-List" target="_blank" rel="noopener noreferrer">
          <button className="view-button">View Project</button>
        </a>
      </div>
      
    </div>
  );
};

export default Projects;
