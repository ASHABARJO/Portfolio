import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div className="main-container">
      <div className="row">
        <div className="col-lg-7 col-md-12 text-container">
          <h1 className="title">Hello I'am</h1>
          <h3 className="subtitle">Web Developer and Machine Learning Enthusiast</h3>
        {/* <p>Front-end dev designs and ML enthusiast explores AI's learning power.</p> */}
        </div>
        <div className="col-lg-5 col-md-12">
          <img src="https://bit.ly/3VX265X" alt="Hero" className="hero-img ms-5" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
