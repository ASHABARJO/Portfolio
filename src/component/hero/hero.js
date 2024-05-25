import React, { useState, useEffect } from 'react';
import './hero.css'
const texts = [
  "Web Developer",
  "Machine Learning",
  "UX/UI Designer"
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
    <div className='main ms-5 mt-5 ps-4'>
      <div className="hero row">
        <div className="col-lg-6 col-sm-6 col-md-6">

          <div className="card-fluid">
            <div className="card-body">
            <div className="left ">
      <h1 className='title'>I am a</h1>
      <div className="typewriter-container">
            <h3 className="typewriter-text">{currentText}<span className="cursor"></span></h3>
        </div>
      </div>
            </div>
          
          </div>
        
        </div>
      </div>
      
      <div className="col-lg-6 col-sm-6 col-md-6 ms-5" >
        <div className="card-fluid">
          <div className="card-body">
          <div className="right">
        <div className="image-show">
          <img src="https://image.lexica.art/md2_webp/0b9a1108-23af-4942-bf38-db659e829268" alt="" className='image-fluid' />
        </div>
      </div>
          </div>
       
        </div>

      </div>

    </div>
  )
}

export default Hero
