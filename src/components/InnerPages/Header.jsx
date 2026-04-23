import React from 'react';

function Header({ data, subBg }) {
  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h1 className="fz-55">About JB WebMedia: Your Go-To Digital Marketing Team</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10">
            <div className="text mt-30">
              <p>JB WebMedia has been helping businesses just like yours show up stronger online for over 13+ years. We have collaborated with 250+ firms in 10+ countries, increasing their average traffic by 5x through strong SEO services, clever link-building, and a clean web layout that actually works. We are here because we like to see real results of real people.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>{data.text}</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>{data.text}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header