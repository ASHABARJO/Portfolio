import React from 'react';
import Contact from './component/contact/contact';
import Footer from './component/footer/footer';
import Navbar from './component/navbar/navbar';
import BioMain from './component/bio/bio-main';
// import Project from './component/project/project';
import Project_info from './component/project/Project_info'
import Home from './component/Home';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
function App() {
const router=createBrowserRouter([{
  path:"/",
  element:<Home/>
},
{
  path:"/contact",
  element:<Contact/>
},
{
  path:"/project_info",
  element:<Project_info/>
},
{
  path:"/bio-main",
  element:<BioMain/>
}
])
  return (
    <>
      <Navbar/>
      
      {/* <Hero/>
      <Bio/>
      <Skills/>
      <Project/>
      <Education/>*/}
      <RouterProvider router={router}/>
      <Footer/> 
    </>
  );
}

export default App;
