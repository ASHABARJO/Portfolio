import React from 'react';
import Bio from '../component/bio/bio';

import Project from '../component/project/project';
import Education from '../component/education/education';
import Hero from '../component/hero/hero';
import Skills from '../component/skills/skills';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
const Home = () => {
  return (
    <>
      <Hero/>
      <Bio/>
      <Skills/>
      <Project/>
      <Education/>
    </>
  )
}

export default Home
