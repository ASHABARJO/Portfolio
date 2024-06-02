import React from 'react'
import './project.css'
const Project = () => {
  return (
    <div>
      <div className="  pt-5 title text-center">
      <h1>Project</h1>
      </div>
<div className="row">
  <div className="col-lg-6 ps-5 pt-5 pb-5 pe-5">
    <div className="row">
<img src="https://media.licdn.com/dms/image/D5622AQHdiQaPpWn0cA/feedshare-shrink_800/0/1711250860505?e=1720051200&v=beta&t=h1ktHixDzkosz8MjsyzBVeQHQRWQWaAjUWaFqmBK5yc" className='project-image' alt="" srcset="" />
    </div>
    
  </div>

  <div className="col-lg-6 ps-5 pt-5 pb-5 pe-5">
    <div className="card-fluid  text-center">
      <h3>News Portal</h3>
      <h5>Skills: HTML,CSS,Javascript,React,Bootstrap</h5>
     <p>Today's News is a dynamic, responsive news portal developed using HTML, CSS, JavaScript, React, and Bootstrap. It gathers a variety of news articles from different genres through the Fetch News API. The design ensures seamless adaptability, providing optimal viewing and interaction across various screen sizes and devices, making it accessible and user-friendly for a broad audience. The layout dynamically adjusts to deliver a consistent, engaging user experience on any platform.</p>
    </div>
    
<div className="link-group text-center">
      <a className="mx-2" href="#">Github</a>
      <a className="mx-2" href="#">Vercel</a>
    </div>
  </div>
</div>


{/* 2nd row */}
<div className="row">
  <div className="col-lg-6 ps-5 pt-5 pb-5 pe-5">
  <div className="card-fluid">
      <h3 className='text-purple'>SpotifyClone</h3>
      <h5>Skills: HTML,CSS,Javascript</h5>
     <b>Project Overview:</b><br />
Developed a static Spotify clone using HTML, JavaScript, and CSS.
<br />
<b> Features: </b><br />
<p>Inspired by Spotify's interface and functionality.</p>
<p>Exclusively features songs by Arijit Singh.</p>
<p>Fully responsive design, ensuring seamless user experience across various devices and screen sizes.</p>


<div className="link-group text-center">
      <a className="mx-2" href="#">Github</a>
      <a className="mx-2" href="#">Vercel</a>
    </div>
    </div>
    
  </div>

  <div className="col-lg-6 bg-grey ps-5 pt-5 pb-5 pe-5">
  <div className="row">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMF76yJ5O0RCuUXp9l2jhRo_OvaGkiPSSCkw&s" className='project-image' alt="" srcset="" />
  
    </div>
  
    

    
  </div>
</div>

{/* 3rd row */}
<div className="row">
  <div className="col-lg-6 ps-5 pt-5 pb-5 pe-5">

<div className="row">
<img src="https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2020/12/Machine-Learning-Project-on-House-Price-Prediction.png?fit=1280%2C720&ssl=1" className='project-image' alt="" srcset="" />
  
    </div>
  </div>

  <div className="col-lg-6 bg-grey ps-5 pt-5 pb-5 pe-5">
  <div className="card-fluid">
      <h3 className='text-purple'>SpotifyClone</h3>
      <h5>Skills: HTML,CSS,Javascript</h5>
      Predict house prices using linear regression on the Boston House Price dataset:

<p><h5>1.Analyze Features:</h5> Identify and visualize key features affecting prices.</p>
<p><h5>2.Select Algorithm:</h5> Use linear regression for simplicity and interpretability.</p>
<h5>3.Enhance Model:</h5>
    <p><b>MSE</b>: Measure average squared prediction error; lower is better</p>.
    <p><b>R-squared</b>: Assess variance explained by the model; higher is better. </p>
    <p><b> Implementation </b>: Fit the model, predict prices, optimize via cross-validation and hyperparameter tuning. </p>

<div className="link-group text-center">
      <a className="mx-2" href="#">Github</a>
      <a className="mx-2" href="#">Vercel</a>
    </div>
    </div>
  
  </div>
</div>

    </div>
  )
}

export default Project
