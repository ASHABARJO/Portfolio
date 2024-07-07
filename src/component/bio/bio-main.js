import React from 'react';

const BioMain = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Resume.pdf'; // Ensure the CV is in the public directory
    link.download = 'Asha_Barjo_Resume.pdf'; // Set the desired file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

 
  return (
    <div className="bio-main ms-5 container">
      <div className="row">
        <div className="col-lg-7">
          
          <h3 className='text-danger'>Primary Expert Skill: Web Development and Machine Learning</h3>
          <div className="skill-list">
            <ul>
              <li><b> Programming Language:</b> Python,Cpp</li>
              <li><b>Web development Skill : </b> HTML,CSS,Javascript,React,BootStrap,Trailwind,Node js</li>
            </ul>
          </div>
          <div className="card-body pt-1 ps-5 pe-5">
             <div className='brief'>
             <p>
                Hello, <b>I'm Asha Barjo</b> a recent graduate with a <b> BTech in Computer Science and Engineering.</b> Technology enthusiast at heart, I have a strong foundation in programming, <b> front-end development, machine learning</b>. Fluent in both English and Hindi, I thrive on effective communication and collaboration across diverse backgrounds. For me, practical experience is as crucial as theoretical knowledge. Recently, I completed a project where I crafted a responsive website with an intuitive user interface. I'm constantly seeking opportunities to expand my skill set and with a firm belief in perseverance and hard work, I'm dedicated to pursuing my passion for technology and overcoming any challenges that come my way.
              </p>
             </div>
              

              <button type="button" className="btn btn-dark" onClick={handleDownload}>Download Resume</button>
            </div>
          <div className='social-handle'>
            <h4>Social Media Handles:</h4>
            <ul>
            <a href="https://twitter.com/ashabarjo">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://linkedin.com/in/ashabarjo">
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/ashabarjo">
            <i class="fa fa-github-square" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/asha_barjo/">
            <i className="fa fa-instagram " aria-hidden="true"></i>
                </a>


            </ul>
          </div>
        </div>
        <div className="col-lg-5">
          {/* Add any additional content or styling for the second column */}
          <img src="https://bit.ly/3VX265X"  className="about-img ms-5" alt="" />
          <h4 className='project-title text-center '>Asha Barjo</h4>
        </div>
      </div>
    </div>
  );
};

export default BioMain;
