import React from 'react';

function FAQCreative() {
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
                    <h6 className="fz-18">How much does website design cost?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">It depends on what you need, starting at estimating $2,499 for custom website design. Things like UI UX design services or eCommerce website design add up. Request a Design Quote for the real number.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Do you create SEO-friendly websites?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">You bet. We build in SEO-friendly features, tags, and fast loading to climb those search results.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Will my website be mobile-friendly?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">100%. Responsive website design means a perfect user experience on any device.</p>
                  </div>
                </div>
                    <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Do you offer website redesign services?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yep, that's a big one. We revamp websites for a more modern design and conversions.</p>
                  </div>
                </div>
              
              </div>
            </div>
              <button type="submit" className="butn butn-md butn-bord radius-30 mt-30"><span className="text">Get a Free Website Audit & Start Your Project Today</span></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQCreative