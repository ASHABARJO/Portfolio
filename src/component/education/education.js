import React from 'react'
import './education.css'

const Education = () => {
  return (
    <div>
      <div className="education title">
        <h1 className='text-center project-title'>Education</h1>
      </div>
      <div className='education-container'>
        <div className="card-education card">
          <div className="card-body border border-dark">
            <h5 className='card-title text-primary'>D.A.V Public School <br /> Gua</h5> 
            <h6 className="text-success">High School</h6>
            <p className="card-text">2017-2018</p>
          </div>
        </div>

        <div className="card-education card">
          <div className="card-body border border-warning">
            <h5 className='card-title text-primary'>Nirmala College <br /> Ranchi</h5> 
            <h6 className="text-success">Intermediate</h6>
            <p className="card-text">2018-2020</p>
          </div>
        </div>

        <div className="card-education card">
          <div className="card-body border border-danger">
            <h5 className='card-title text-primary'>Birla Institute of Technology, Mesra</h5> 
            <h6 className="text-success">Undergraduate</h6>
            <p className="card-text">2020-2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
