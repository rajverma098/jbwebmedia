import React from 'react';

function FAQAppDevelopment() {
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
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-head mb-40">
              <h6 className="sub-title">Frequently Asked Questions (FAQs)</h6>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cont">
           
              <div className="accordion bord">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How much does it cost to develop a mobile app?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">The cost depends on the app’s features, complexity, and platform. A basic React Native app is simpler, while a full eCommerce app requires more development. Request a quote for your exact needs.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How long does it take to build a mobile app?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">How long does it take to build an app? 3-6 months most times. Quick starters in 2-3 months, bigger ones 4-6. We move fast.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Which is better: native or cross-platform apps?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Native for top speed (Android app development services/iOS). Cross-platform (Flutter app development) for quick and cheap. We pick what's best for you.</p>
                  </div>
                </div>
                    <div className="item wow fadeInUp" data-wow-delay=".7s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Do you provide app maintenance services?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yep, plans to keep things running smoothly.</p>
                  </div>
                </div>
                  <div className="item wow fadeInUp" data-wow-delay=".9s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Will my app be scalable?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">For sure. Built to handle from thousands to millions of users.</p>
                  </div>
                </div>
              
              </div>
            </div>
              <button type="submit" className="butn butn-md butn-bord radius-30 mt-30">Hire mobile app developers now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQAppDevelopment