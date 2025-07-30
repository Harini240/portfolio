import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-section">
      <h2>Academic Credentials</h2>
      <div className="education-card">
        <h3>Bachelor of Technology </h3>
        <p><strong>Artificial Intelligence & Machine Learning</strong></p>
        <p>M. Kumarasamy College of Engineering, Karur</p>
        <p>CGPA: 7.8 (2022–2026)</p>
      </div>

      <div className="education-card">
        <h3>Higher Secondary Certificate (HSC)</h3>
        <p>Sri Vijay Vidyalaya, Hosur</p>
        <p>Percentage: 82.3% (2021–2022)</p>
      </div>

      <div className="education-card">
        <h3>Secondary School Leaving Certificate (SSLC)  </h3>
        <p>Sri Vijay Vidyalaya, Hosur</p>
        <p>Percentage: 95% (2019–2020)</p>
      </div>
    </div>
  );
};

export default Education;
