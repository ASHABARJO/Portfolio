import React from 'react';
import './footer.css';

const Footer = () => {
 
  return (


<footer className="footer container-fluid text-white ">
      <div className="footer-content pt-5">
        <div className="content row">
          {/* Social media */}
          <div className="social-content col-lg-4">
            <div className="links-group  text-center">
              <h2 className="heading pb-3 ">Social Links</h2>
              <span className="links">

                <a href="https://www.linkedin.com/in/asha-barjo/"> <i className="fa fa-linkedin text-white" aria-hidden="true"></i></a>
              </span>
              <span className="links ">
                <a href="https://github.com/ASHABARJO">
          <i className="fa fa-github text-white" aria-hidden="true"></i>
                </a>
              </span>
              <span className="links text-white">
                <a href="https://x.com/AshaB1404">

              <i class="fa fa-twitter text-white" aria-hidden="true"></i>
                </a>
              </span>
              <span className="links">
                <a href="https://www.instagram.com/asha_barjo/">
<i className="fa fa-instagram text-white" aria-hidden="true"></i>
                </a>
              </span>
            </div>
          </div>
          {/* Contact Us */}
 
          <div className=" col-lg-4">
  <div className="row">
    <div className="col-lg-12">
      <h2 className='heading text-center'>Quick Links</h2>
      <div className='quick-links text-center'>
      {/* <Link to="/" className='text-white'>Home</Link> */}
      <a className="nav-link active" aria-current="page" href="/">Home</a>
      </div>
      <div className='quick-links text-center'>
      {/* <Link to="/hero" className='text-white'>Intro</Link> */}
      <a className="nav-link" href="/project_info">Project</a>
      </div>
      <div className='quick-links text-center'>
      <a className="nav-link" href="/bio-main">About</a>    
      </div>
      <div className='quick-links text-center'>
      <a className="nav-link" href="/contact"> Contact</a>
      </div>
    </div>
  </div>
          </div>

          {/* Additional Information */}
          <div className="additional col-lg-4 ">
              <h2 className="heading text-center">Connect with me</h2>
                  <p><i><b>Address:</b> Nawa toli, Karra Road, Khunti, 835210, Jharkhand</i></p>
                  <p><i><b>Phone:</b> 7070437172</i></p>
                  <p><i><b>Email:</b> ashajobs2024@gmail.com</i></p>
                    </div>
             </div>
      
</div>
<div className="copy-area text-center">
  <div className="row">
  <div className="col-lg-12  bg-dark text-white pt-2 pb-2">ashabarjoprofile.com</div>
      </div>

  </div>
    
    </footer>

) }
export default Footer;
