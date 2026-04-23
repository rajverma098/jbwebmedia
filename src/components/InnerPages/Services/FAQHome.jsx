import React from 'react';

function FAQHome() {
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
                <div className="text mt-10">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Frequently Asked Questions:</span>
                  </span>
                
                </h2>
              </div>
          </div>
          <div className="col-lg-7">
            <div className="cont">
          
              <div className="accordion bord ">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How long does Search Engine Optimization take to show results?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">SEO is a long-term, gradual process for websites and apps. The majority of our customers begin to experience actual results in traffic and rankings within three to six months, but this is based on the competitiveness of your space and your starting point.</p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Do you guarantee rankings or results?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We don’t promise specific positions because Google has the final say, but we do guarantee measurable growth in traffic, leads, and return on investment. Our track record shows the strategies work when followed properly.</p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What industries do you work with?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Pretty much any e-commerce, healthcare, startups, local service businesses, you name it. We tailor the plan to fit whatever sector you’re in.</p>
                  </div>
                </div>
                   <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Do you provide a customised digital strategy?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">Yes, always. There is no template form of business and therefore we create all SEO, websites and marketing strategies tailor-made depending on your objectives and your readers, as well as what your competitors are up to.</p>
                  </div>
                </div>
                   <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">What tools and technologies do you use?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">We work with SEMrush, Ahrefs, Google Analytics, and up-to-date development frameworks so everything we deliver is fast, accurate, and built to last.</p>
                  </div>
                </div>
                   <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">How do we get started with JB Web Media?</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">The leading <strong>custom mobile application development agency in India? </strong>Just reach out for a free strategy session. We’ll look at your business, point out the best opportunities, and put together a clear roadmap that makes sense for you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQHome