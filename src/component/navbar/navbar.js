import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand project-title " href="/">Asha Barjo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link  project-title" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link project-title" href="/project_info">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link project-title" href="/bio-main">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link project-title" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
