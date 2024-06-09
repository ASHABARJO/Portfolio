import React from 'react'
import './project.css'

const Project = () => {
  return (
    <div>
      <div className="pt-5 title text-center">
        <h1>Project</h1>
      </div>

      <div className="row ps-5">
        <div className="col-lg-6 ps-5 pt-5 pb-5 pe-5">
          <div className="row">
            <img
              src="https://play-lh.googleusercontent.com/KZTO1L6r8CzWlg2InJoU_ndRAuvYiaS-35MyYdDPeeVCPNVfM9SBY2qRGjvvADmDIR8"
              className="project-image" width="4rem"
              alt=""
              srcSet=""
            />
          </div>
        </div>

        <div className="col-lg-6 ps-5 pt-5 pb-5 ">
          <div className="project-card card-fluid">
            <h3 className="text-purple">Tic Tac Game</h3>
            <h5>Skills: HTML,CSS,Javascript</h5>
            <p>

<p><b>Duration</b>: January 2024 - Present</p>
<p><b>Technologies Used</b>: HTML, CSS, JavaScript </p>
<p> <b>Description </b>:</p>
<p>-Developed a web-based TicTacToe game. </p>
<p>-Blends nostalgia with modern technology. </p>
<p> - Delivers an engaging user experience.</p>
<p>- Evokes joyful childhood memories.</p>
<p> - Seamlessly merges past charm with digital innovation.</p>
            </p>

            <div className="link-group text-center">
              
            <a className="mx-2" href="https://github.com/ASHABARJO/TicTacToe_Game.git">Github</a>
            <a className="mx-2" href="https://tic-tac-toe-game-kappa-one.vercel.app/">Vercel</a>
          </div>
          </div>

        </div>
      </div>

      {/* 2nd row */}
      <div className="row ps-5">
        <div className="col-lg-6 ps-5 pt-5 pb-5 ">
          <div className="project-card card-fluid">
            <h3 className="text-purple">SpotifyClone</h3>
            <h5>Skills: HTML,CSS,Javascript</h5>
            <b>Project Overview:</b>
            <br />
            Developed a static Spotify clone using HTML, JavaScript, and CSS.
            <br />
            <b> Features: </b>
            <br />
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
          <div className=" row ps-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMF76yJ5O0RCuUXp9l2jhRo_OvaGkiPSSCkw&s"
              className="project-image"
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </div>

      {/* 3rd row */}
      <div className="row ps-5">
        <div className="col-lg-6 ps-5 pt-5 pb-5 pe-5 ">
          <div className="row">
            <img
              src="https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2020/12/Machine-Learning-Project-on-House-Price-Prediction.png?fit=1280%2C720&ssl=1"
              className="project-image"
              alt=""
              srcSet=""
            />
          </div>
        </div>

        <div className="col-lg-6 bg-grey ps-5 pt-5 pb-5 pe-5">
          <div className="project-card card-fluid">
            <h3 className="text-purple">House Price Prediction</h3>
            <h5>Skills: HTML,CSS,Javascript</h5>
            <p>
              Predict house prices using linear regression on the Boston House
              Price dataset:
            </p>
            <h5>1. Analyze Features:</h5>
            <p>Identify and visualize key features affecting prices.</p>
            <h5>2. Select Algorithm:</h5>
            <p>Use linear regression for simplicity and interpretability.</p>
            <h5>3. Enhance Model:</h5>
            <p><b>MSE</b>: Measure average squared prediction error; lower is better.</p>
            <p><b>R-squared</b>: Assess variance explained by the model; higher is better.</p>
            <p><b> Implementation </b>: Fit the model, predict prices, optimize via cross-validation and hyperparameter tuning.</p>

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
