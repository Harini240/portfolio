import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/education">Education</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/certifications">Certifications</Link>
      <Link to="/activities">Co-Curricular</Link>
      <Link to="/Skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
