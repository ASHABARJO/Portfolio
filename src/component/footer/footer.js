import React from 'react';

import './footer.css';

const Footer = () => {
 
  return (
    <footer className="footer container-fluid bg-dark text-white">
      <div className="footer-content">
        <div className="content row">
          {/* Social media */}
          <div className="social-content col-lg-4 col-md-4 col-sm-12">
            <div className="links-group mt-5 ms-5">
              <h2 className="social-header">Social Links</h2>
              <div className="links">

                <a href="https://www.linkedin.com/in/asha-barjo/"> <i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
              <div className="links">
                <a href="https://github.com/ASHABARJO">
          <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
              <div className="links text-white">
                <a href="https://x.com/AshaB1404">

              <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
              <div className="links">
                <a href="https://www.instagram.com/asha_barjo/">
<i className="fa fa-instagram " aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          {/* Contact Us */}
 

          {/* Additional Information */}
          <div className="additional col-lg-4 col-md-4 col-sm-12 ps-3">
            <div className="card1 mt-5 ms-5">
              <h2 className="text-center">Connect with me</h2>
              <div className="card-fluid ms-3">
                <div className="address mt-3">
                  <p><i><b>Address:</b> Nawa toli, Karra Road, Khunti, 835210, Jharkhand</i></p>
                </div>
                <div className="phone mt-3">
                  <p><i><b>Phone:</b> 7070437172</i></p>
                </div>
                <div className="email mt-3">
                  <p><i><b>Email:</b> ashajobs2024@gmail.com</i></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
