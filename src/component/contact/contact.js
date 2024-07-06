import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>
     <section id="contact" className='mt-3'>
       <div className="container">
           <h3 className="text-center text-uppercase">contact us</h3>
           {/* <p className="text-center w-75 m-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum purus at sem ornare sodales. Morbi leo nulla, pharetra vel felis nec, ullamcorper condimentum quam.</p> */}
           <div className="row">
             <div className="col-sm-12 col-md-6 col-lg-4 my-5">
               <div className="card border-0">
                  <div className="card-body text-center">
                    <i className="icon fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                    <h4 className="text-uppercase mb-3">call us</h4>
                    <p>7070437172</p>
                  </div>
                </div>
             </div>
             {/* <div className="col-sm-12 col-md-6 col-lg-3 my-5">
               <div className="card border-0">
                  <div className="card-body text-center">
                    <i className="icon fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                    <h4 className="text-uppercase mb-5">office loaction</h4>
                   <address>Suite 02, Level 12, Sahera Tropical Center </address>
                  </div>
                </div>
             </div> */}
             <div className="col-sm-12 col-md-6 col-lg-4 my-5">
               <div className="card border-0">
                  <div className="card-body text-center">
                    <i className="icon fa fa-map-marker fa-5x mb-3" aria-hidden="true"></i>
                    <h4 className="text-uppercase mb-3">Loaction</h4>
                    <address>Khunti,Jharkhand </address>
                  </div>
                </div>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-4 my-5">
               <div className="card border-0">
                  <div className="card-body text-center">
                    <i className="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                    <h4 className="text-uppercase mb-3">email</h4>
                    <p>ashajobs2024@gmail.com</p>
                  </div>
                </div>
             </div>
           </div>
       </div>
       
    </section> 
    
    </>
  )
}

export default Contact
