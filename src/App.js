import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from './component/bio/bio';
import Footer from './component/footer/footer';
import Navbar from './component/navbar/navbar';
import Project from './component/project/project';
import Education from './component/education/education';
import Hero from './component/hero/hero';
import Skills from './component/skills/skills';
const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Bio/>
        <Skills/>
        <Project/>
        <Education/>
        <Footer/>
        <Routes>
          <Route path="/hero" element={<Hero/>} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skills/>} />
          <Route path="/education" element={<Education />} />
        </Routes>
              </div>
    </Router>
  );
};
export default App;
