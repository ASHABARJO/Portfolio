import React, { useState, useEffect } from 'react';
import './hero.css';

const texts = [
  "Web Developer",
  "Machine Learning Enthusiast"
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const speed = 100; // Adjust speed here
  const delayBetweenTexts = 1000; // Delay between texts

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentText + texts[textIndex].charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setTextIndex((textIndex + 1) % texts.length);
        setCurrentText('');
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex, currentText]);

  return (
    <div className="main-container">
      <div className="row">
        <div className="col-lg-6 col-md-12 text-container">
          <h1 className="title">I am a</h1>
          <div className="typewriter-container">
            <h3 className="typewriter-text">{currentText}<span className="cursor"></span></h3>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <img src="https://image.lexica.art/md2_webp/0b9a1108-23af-4942-bf38-db659e829268" alt="Hero" className="hero-image img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
