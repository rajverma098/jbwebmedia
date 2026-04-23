import React from 'react';

function Intro() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach(element => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    })
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container ">
        <div className="row justify-content-around mb-35">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img src="/dark/assets/imgs/about/about-02.jpg" alt="" className="radius-10" />
              </div>
              {/* <div className="img2 wow fadeInLeft">
                <img src="/dark/assets/imgs/about/sq2.jpg" alt="" className="radius-10" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  How We Got Here
                </h2>
                <p>13+ years in, our team is Google-certified and has seen it all from e-commerce shops to SaaS startups and local clinics. We have bumped client sales by 300% or more, earned Clutch awards (4.9/5 stars), and always keep things open with clear reports. That's our edge: real experience you can count on, proven know-how, authority backed by results, and trust built one project at a time.</p>
              </div>
              <h3>Key milestones:</h3>
              <ul className='list_items'>
                <li>2018: First 10 local clients on board.</li>
                <li>2020: Built out a remote team as everyone went online.</li>
                <li>2022: Crossed 100 projects; started our design studio.</li>
                <li>2024: Nailed Clutch Top Performer status.</li>
                <li>2026: Rolling out AI smarts for even bigger plays.</li>
              </ul>
              <p>Now we're 20 strong, working with brands nationwide.
</p>
              {/* <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">The Power of Influencer Marketing</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Unique and Influential Design</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">We Build and Activate Brands</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <h2>Why Team Up with Us?</h2>
        <table className='table_grid'>
          <thead>
            <th> What We Bring</th>
            <th>What It Means for You</th>
          </thead>
          <tbody>
            <tr>
              <td>Real Results</td>
              <td>95% of clients stick around; 5x traffic jumps.</td>
            </tr>
              <tr>
              <td>Made for You</td>
              <td>No one-size-fits-all, your plan, your way.</td>
            </tr>
              <tr>
              <td>No Crazy Prices</td>
              <td>Top quality without the big-agency markup.</td>
            </tr>
              <tr>
              <td>Always There</td>
              <td>Your account manager's got your back, any time zone.</td>
            </tr>
              <tr>
              <td>Built to Last</td>
              <td>Ready for Google's next curveballs and AI changes.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Intro