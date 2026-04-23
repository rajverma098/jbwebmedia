import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
        <img src="/dark/assets/imgs/about/img-about.jpg" alt="" /> 
          
            <div className="cont mt-80">
              <h2>Who We Are (and What We Actually Do)</h2>
              <p>We are JB WebMedia, a digital marketing agency based in Mohali, Punjab. Our thing? SEO services, link building services, website design, content that pulls people in, and digital plans that make sense for your business.</p>
              <p>We dig into tools like Ahrefs and Google Analytics to figure out what works for you no guesswork, just stuff that moves the needle.</p>
              <h2>What We Offer</h2>
              <p>Here's the breakdown of what we handle every day:</p>
              <ul className='list_items'>
              <li><strong>SEO Services:</strong> Getting you on Google's front page with on-page tweaks, technical fixes, and local boosts.</li>
              <li><strong>Link Building Services:</strong> Authentic, quality links that help in building trust and attracting traffic.</li>
              <li><strong>Website Design:</strong> Load fast websites, are mobile-friendly, and convert clicks into customers.</li>
                <li><strong>Content Marketing:</strong> Blogs, videos, emails, anything to keep your audience hooked.</li>
                <li><strong>Digital Strategy:</strong> The plan of the big picture, including advertisements, social, and monitoring what is important.</li>
              </ul>
            <h2>Our Expertise and Industry Knowledge</h2>
            <p>Our team is 13+ years old and Google certified and has been there and done it, having worked with e-commerce stores to SaaS startups and local clinics. We have increased client sales 300% or more, received Clutch awards (4.9/5 stars), and maintain an open mind with transparent reports. It works like our EEAT experience, an experience you can rely on, expertise based on performance, and trust that one project at a time.</p>
            <h2>Our Mission, Vision, and What We Stand For</h2>
            <ul className='list_items'>
              <li><strong>Mission:</strong> Help brands grow online with tools and strategies that stick.</li>
              <li><strong>Vision:</strong> Be the digital marketing agency ambitious companies call first.</li>
            </ul>
            <h3>Core Values:</h3>
            <ul className='list_items'>
              <li><strong>Innovation:</strong> We jump on new tech like AI without overcomplicating things.</li>
              <li><strong>Transparency:</strong> You see our dashboards; no smoke and mirrors.</li>
              <li><strong>Results:</strong> Everything ties back to your bottom line.</li>
              <li><strong>Partnership:</strong> We're in your corner, cheering every win.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story