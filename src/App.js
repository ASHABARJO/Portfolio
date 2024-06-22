import React from 'react';
import Bio from './component/bio/bio';
import Footer from './component/footer/footer';
import Navbar from './component/navbar/navbar';
import Project from './component/project/project';
import Education from './component/education/education';
import Hero from './component/hero/hero';
import Skills from './component/skills/skills';
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Bio/>
      <Skills/>
      <Project/>
      <Education/>
      <Footer/>
    </>
  );
}

export default App;
