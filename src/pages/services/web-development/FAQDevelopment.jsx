import React from 'react';

function FAQDevelopment() {
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
                    <h6 className="fz-18">What is website development?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">What is website development? Basically, it's putting together the code and features that make a website run, the visuals, the functions, storage, all that. We take care of it for a site that's solid.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How much does website development cost?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">The cost depends on your requirements, features, and design complexity. Share your needs, and we’ll provide a custom website development quote.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How long does it take to build a website?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Usually 4-12 weeks. Quick WordPress website development in 4, bigger custom website development takes 8-12.</p>
                  </div>
                </div>
                    <div className="item wow fadeInUp" data-wow-delay=".7s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Do you build SEO-friendly websites?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Every time. We add SEO-friendly code, quick loads, and mobile readiness.</p>
                  </div>
                </div>
                  <div className="item wow fadeInUp" data-wow-delay=".9s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Which platform is best: WordPress or Shopify?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">WordPress if you want blogs or flexibility on a budget. Shopify for straightforward selling. We help pick a request a quote to chat.</p>
                  </div>
                </div>
              
              </div>
            </div>
              <button type="submit" className="butn butn-md butn-bord radius-30 mt-30">Get a Free Website Consultation today</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQDevelopment