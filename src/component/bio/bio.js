import React from 'react';
import './bio.css';

const Bio = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Resume.pdf'; // Ensure the CV is in the public directory
    link.download = 'Asha_Barjo_Resume.pdf'; // Set the desired file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bio container mt-2'>
      <div className="row">
        <div className="col-lg-12 col-sm-12 col-md-12 ">
          <div className="title">
            <h1 className='text-center project-title'>About</h1>
          </div>
        </div>
        <div className="para-container col-lg-12 col-sm-12 col-md-12">
          <div className="para card-fluid">
            <div className="card-body pt-5 ps-5 pe-5">
              <p>
                Hello, <b>I'm Asha Barjo</b> a recent graduate with a <b> BTech in Computer Science and Engineering.</b> Technology enthusiast at heart, I have a strong foundation in programming, <b> front-end development, machine learning</b>. Fluent in both English and Hindi, I thrive on effective communication and collaboration across diverse backgrounds. For me, practical experience is as crucial as theoretical knowledge. Recently, I completed a project where I crafted a responsive website with an intuitive user interface. I'm constantly seeking opportunities to expand my skill set and with a firm belief in perseverance and hard work, I'm dedicated to pursuing my passion for technology and overcoming any challenges that come my way.
              </p>

              <button type="button" className="btn btn-dark" onClick={handleDownload}>Download Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
