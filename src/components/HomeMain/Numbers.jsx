import React from 'react';

function Numbers() {
  return (
    <div className="numbers mt-80 pt-80 bord-thin-top wow fadeIn" data-wow-delay=".4s">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="item md-mb50">
            <h2 className="fw-800 stroke">16</h2>
            <h6>Years of Experience</h6>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex justify-content-around">
          <div className="item md-mb50">
            <h2 className="fw-800">400+</h2>
            <h6>Web Designs</h6>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex justify-content-around">
          <div className="item sm-mb50">
            <h2 className="fw-800 stroke">550+</h2>
            <h6>SEO/Digital Marketing</h6>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex">
          <div className="item ml-auto">
            <h2 className="fw-800">350+</h2>
            <h6>Content & others</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers