import React from 'react';
import Link from 'next/link';
import { BookSearch, BugPlay, Cog, FileSpreadsheet, ReceiptText } from 'lucide-react';

function About({ lightMode }) {
  return (
    <section className="about-intro section-padding">
      <div className="container">
        
          <div className="col-lg-12">
            <div className="row mb-80">
            <div className='col-lg-4'>
            <div className="sec-lg-head md-mb30">
              <h2 className="d-rotate wow">
                <span className="rotate-text " >Why <span className='stroke'>Businesses</span> Choose Us</span>
              </h2>
            </div>
            </div>
             <div className='col-lg-8'>
             <div className="text">
              <p className="d-slideup wow ">
                <span className="sideup-text mb-15">
                  <span className="up-text"><strong>12+ Years of Expertise:</strong> We have been doing this since 2013 and have witnessed all the significant changes that have taken place at Google. The result of this practical experience is that we know what truly stands the test of time and what continues to yield results year after year.</span>
                </span>
                </p>
                <p className="d-slideup wow ">
                <span className="sideup-text mb-15">
                  <span className="up-text"><strong>100% Transparent & Data-Driven:</strong> You always know exactly what’s happening. We provide live dashboards, deliver transparent monthly reports, and even get on calls to show you everything, no secrets, just plain numbers.</span>
                </span>
                </p>
                <p className="d-slideup wow ">
                <span className="sideup-text mb-15">
                  <span className="up-text"><strong>Certified & Tool-Powered:</strong> Our team uses the same tools as the big players, SEMrush, Ahrefs, Moz, HubSpot, and others, and the certifications to support it. It keeps our work sharp and based on real data.</span>
                </span>
                </p>
                <p className="d-slideup wow ">
                 <span className="sideup-text mb-15">
                  <span className="up-text"><strong>Industry-Specific Strategies:</strong> One-size-fits-all plans are not our thing. Each plan will be constructed on your specific niche, your competitors and your target audience and therefore the traffic will be targeted, and the conversions will actually occur.</span>
                </span>
                </p>
                <p className="d-slideup wow ">
                 <span className="sideup-text mb-15">
                  <span className="up-text"><strong>Dedicated Expert Team:</strong> You deal with the same individuals each time, experts who are already knowledgeable about your market and your customers. They keep the lid on your account and that nothing gets through.</span>
                </span>
                </p>
                <p className="d-slideup wow ">
                <span className="sideup-text mb-15">
                  <span className="up-text"><strong>Results-Driven Approach:</strong> We establish clear goals and deadlines. When we are not hitting them we do not give any excuses but work extra hard until your business is rolling once more.</span>
                </span>
              </p>
     
            </div>
            </div>
          </div>
         
        </div>
          
        <div className="row justify-content-center ">
         
          <div className="col-lg-5 rest">
            <div className="imgs md-mb50">
              <h2 className="d-rotate wow">
                <span className="rotate-text">How We Work</span>
              </h2>
              <div className="img1">
                <div className="o-hidden">
                  <div className="imago wow">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/about/01.jpg`} alt="" />
                  </div>
                </div>
              </div>
              <div className="img2">
                <div className="o-hidden">
                  <div className="imago wow">
                    <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/about/1.jpg`} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 valign rest">
            <div className="cont">
             
              <div className="feat ">
                <div className="item-flex d-flex align-items-center mb-10 wow fadeInUp" data-wow-delay=".2s">
                  <div>
                    <div className="icon-img-50">
                      <BookSearch height={50} width={50} />
                    </div>
                  </div>
                  <div className="cont ml-30">
                    <h6>Discovery & Audit</h6>
                    <p className="fz-15">We begin by sitting down with you, examining your objectives, analyzing your competitors, and reviewing your existing online arrangement. This is to assist us in identifying the quick wins and the larger opportunities that will make a difference. </p>
                  </div>
                </div>
                <div className="item-flex d-flex align-items-center mb-10 wow fadeInUp" data-wow-delay=".4s">
                  <div>
                    <div className="icon-img-50">
                      <ReceiptText height={50} width={50} />
                    </div>
                  </div>
                  <div className="cont ml-30">
                    <h6>Strategy Blueprint</h6>
                    <p className="fz-15">Then we take a simple plan that details what we will do, when we will do it, and how we will gauge success. Nothing is unexpected since everything is linked to your budget and your business goals. </p>
                  </div>
                </div>
                <div className="item-flex d-flex align-items-center mb-10 wow fadeInUp" data-wow-delay=".6s">
                  <div>
                    <div className="icon-img-50">
                      <Cog height={50} width={50} />
                    </div>
                  </div>
                  <div className="cont ml-30">
                    <h6>Execution</h6>
                    <p className="fz-15">Our team laces into action, and we connect, create pages, create the site or app and roll out campaigns all with an acute eye on quality and performance over the long term.</p>
                  </div>
                </div>
                <div className="item-flex d-flex align-items-center mb-10 wow fadeInUp" data-wow-delay=".4s">
                  <div>
                    <div className="icon-img-50">
                      <BugPlay height={50} width={50} />
                    </div>
                  </div>
                  <div className="cont ml-30">
                    <h6>Optimization & Testing</h6>
                    <p className="fz-15">We continue to monitor the numbers in real time, test and adjust things as we play. Minor adjustments using real data tend to have the most significant impact. </p>
                  </div>
                </div>
                <div className="item-flex d-flex align-items-center mb-10 wow fadeInUp" data-wow-delay=".2s">
                  <div>
                    <div className="icon-img-50">
                      <FileSpreadsheet height={50} width={50} />
                    </div>
                  </div>
                  <div className="cont ml-30">
                    <h6>Scale & Report</h6>
                    <p className="fz-15">Every month, you get a straightforward report plus a review call so you can see exactly how things are growing. We use those insights to keep pushing things forward.</p>
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

export default About