import React, { useState } from 'react';
import axios from 'axios';
import './footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/send-email', { email, phone })
      .then(response => {
        alert('Email sent successfully');
      })
      .catch(error => {
        alert('Error sending email');
        console.error('There was an error!', error);
      });
  };

  return (
    <footer className="footer container-fluid bg-dark text-white">
      <div className="row">
        {/* Social media */}
        <div className="social-content col-lg-4 col-md-4 col-sm-12 text-white">
          <div className="col-lg-12 col-sm-12 col-md-12 mt-5 ms-5">
<div className="links-group card-fluid">
<h2 className='social-header mt-2 mb-3'>Social Links</h2>
<div className="row mt-2">
              <div className="links col-lg-5 text-center">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </div>
            </div>
            <div className="links row mt-2">
              <div className="col-lg-5 text-center">
                <i className="fa fa-github" aria-hidden="true"></i>
              </div>
            </div>
            <div className="links row mt-2">
              <div className="col-lg-5 text-center">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>
            </div>
            <div className="links row mt-2">
              <div className=" col-lg-5 text-center">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </div>
            </div>
</div>

  
          </div>
        </div>

        {/* Contact Us */}
        <div className="content-container col-lg-4 col-md-4 col-sm-12 text-white">
          <div className="card1 mt-5 ms-5">
            <div className="contact-us">
              <h2 className='text-center'>Contact US</h2>
              <form onSubmit={handleSubmit}>
                <div className="card1 text-center">
                  <div className="input-content card-body">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2  mt-3">
                        <i className="email fa fa-envelope-o" aria-hidden="true"></i>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-10 mt-2 mb-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Enter your Email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="phone col-lg-2 col-md-2 col-sm-2 mt-3">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-10">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Enter your phone number" 
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="additional col-lg-4 col-md-4 col-sm-12 text-white">
          <div className="mt-5 ms-5">
            
            <h2 className='text-center'>Connect with me</h2>
           {/* address */}
           <div className="card-fluid ms-3">
           <div className="address mt-3 ms-5">
            <p className=''> <i><b>Address</b>:Nawa toli,Karra Road <br/>Khunti,835210,Jharkhand</i></p>
  
           </div>
           {/* phone number */}
           <div className="phone mt-3 ms-5">
            <p className=''> <i><b>Phone :</b>7070437172</i></p>
           </div>
           {/* phone number */}
            <div className="email mt-3 ms-5">
            <p className=''> <i><b>Email :</b>ashajobs2024@gmail.com</i></p>
           </div>
           </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
