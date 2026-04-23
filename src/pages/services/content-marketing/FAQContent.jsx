import React from 'react';

function FAQContent() {
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
                    <h6 className="fz-18">What are content marketing services?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Blogs, social posts, emails, stuff that draws people in, earns trust, increases website traffic, and generates leads online without hard selling.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How long does content marketing take?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">First wins in 3 months, big growth 6-12. Consistent posting + SEO = steady climb, like 50% traffic bump by month 4.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How much does content marketing cost?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">The cost depends on your content needs, volume, and strategy. For a tailored plan, grab a content marketing consultation.</p>
                  </div>
                </div>
                    <div className="item wow fadeInUp" data-wow-delay=".7s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Do you offer SEO content writing services?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, standard on everything. Keywords that rank without stuffing.</p>
                  </div>
                </div>
                  <div className="item wow fadeInUp" data-wow-delay=".9s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Can you help with content marketing for e-commerce?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Spot on. We do product roundups, size guides, and cart recovery emails that cut abandons 30%.</p>
                  </div>
                </div>
              
              </div>
            </div>
              <button type="submit" className="butn butn-md butn-bord radius-30 mt-30">Get a Free Content Marketing Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQContent