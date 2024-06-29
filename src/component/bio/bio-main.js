import React from 'react';

const BioMain = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2>Name: Asha Barjo</h2>
          <h3>Primary Expert Skill: Web Development</h3>
          <ul>
            <li>Strong foundation in HTML, CSS, JavaScript, React,Bootstrap</li>
            <li>Experience in machine learning and AI</li>
            <li>Proficient in DBMS, SQL, and Python</li>
            <li>Skilled in UI/UX design using tools like Canva</li>
          </ul>
          <div>
            <h4>Social Media Handles:</h4>
            <ul>
              <li><a href="https://twitter.com/ashabarjo">Twitter</a></li>
              <li><a href="https://linkedin.com/in/ashabarjo">LinkedIn</a></li>
              <li><a href="https://github.com/ashabarjo">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          {/* Add any additional content or styling for the second column */}
        </div>
      </div>
    </div>
  );
};

export default BioMain;
