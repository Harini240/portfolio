// import React from 'react';
// import './Skills.css';

// const Skills = () => {
//   return (
//     <section className="skills">
//       <h2>Skills</h2>
//       <div className="skills-details">
//         <p>
//           <strong>Areas of Interest:</strong> I’m interested in exploring machine learning algorithms and cloud computing, as they offer impactful real-world applications and continuous learning opportunities.
//         </p>

//         <p>
//           <strong>Technical Skills:</strong> I’m comfortable working with Python, Java, and C++. I also have beginner-level experience with C, Node.js, HTML, CSS, and JavaScript. These skills have helped me in various academic and small-scale project work.
//         </p>

//         <p>
//           <strong>Soft Skills:</strong> I adapt quickly to new environments and enjoy learning on the go. I work well in team settings and value collaboration.
//         </p>

//         <p>
//           <strong>Languages Known:</strong> In addition to English and Tamil, I have basic proficiency in Japanese (JLPT N5). I can also understand Kannada and Telugu at a basic level.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="section-title">Skills</h2>

      <div className="skill-box">
        <h3>🎯 Areas of Interest</h3>
        <p>I’m interested in exploring machine learning algorithms and cloud computing, as they offer impactful real-world applications and continuous learning opportunities.
</p>
      </div>

      <div className="skill-box">
        <h3>🛠️ Technical Skills</h3>
        <p><strong>Intermediate Languages:</strong> Python, C++, Java</p>
        <p><strong>Entry-Level Languages:</strong> C, Node.js, HTML, CSS, JS</p>
        <p><strong>Core Concepts:</strong> Data Structures, OOPs, Machine Learning</p>
      </div>

      <div className="skill-box">
        <h3>🤝 Soft Skills</h3>
        <p> I adapt quickly to new environments and enjoy learning on the go.</p>
        <p> I work well in team settings and value collaboration</p>
      </div>

      <div className="skill-box">
        <h3>🗣️ Languages Known</h3>
        <p> In addition to English and Tamil, I have basic proficiency in Japanese (JLPT N5). I can also understand Kannada and Telugu</p>
      </div>
    </div>
  );
};

export default Skills;
