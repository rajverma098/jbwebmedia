import React, { useState, useEffect } from 'react';
import Link from 'next/link';
//= Components
import ModalVideo from '@/components/Common/ModalVideo';
import Images from "../../images/Images";
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Image from 'next/image';

function Header({ lightMode }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <header className="crev-header hero">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-12">
            <div className="caption">
              <h1>Best Digital Marketing <span className="stroke">and </span><br /> Top Mobile App Development Company</h1>
            <p>Turn Your Website Into a Lead-Generating Machine with Our <strong>Best Digital Marketing Agency.</strong> At <strong>JB WebMedia</strong>, we help businesses like yours get more out of their online presence. We focus on practical SEO that actually works, websites that turn visitors into customers, and marketing campaigns that bring in steady results without the fluff.</p>
            <p>We cover everything from building strong backlinks and solid SEO foundations to full website builds and smart digital marketing. It’s all geared toward better search rankings, more traffic, and real revenue that you can see on your bottom line.</p>
            <p><strong>Book Your Free 30-Minute Strategy Call</strong></p>
            <div className="slide-btn"><Link href="/contact/" className="btn-primary"> Get a Free Audit </Link> </div>
            </div>
          </div>
       
        </div>
      </div>
      
      <div className="bg-pattern bg-img" data-background={`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`}></div>
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </header>
  )
}

export default Header