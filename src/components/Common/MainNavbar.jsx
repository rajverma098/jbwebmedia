import React, { useEffect } from 'react';
import Link from 'next/link';
import Images from "../../images/Images";
import Image from 'next/image';


function MainNavbar({ lightMode, mainBg, subBg, noStatic, curve }) { 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
  }

  function handleDropdownSideMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-side').classList.add('show');
  }

  function handleDropdownSideMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
  }

  function toggleNavbar() {
    document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
  }

  function toggleSearch() {
    let form = document.querySelector(".navbar .search-form");
    let closeBtn = document.querySelector(".search-form .close-search");

    form.classList.toggle("open");
    if (form.classList.contains('open')) closeBtn.style.display = 'block';
    else closeBtn.style.display = 'none';
  }

  return (
    <nav className={`navbar navbar-expand-lg ${curve ? 'nav-crev' : ''} ${noStatic ? '' : 'static'} ${mainBg ? 'main-bg' : ''} ${subBg ? 'sub-bg' : ''}`}>
      <div className="container">
        <Link className="logo icon-img-130 p-2" href="/">
      <Image
        src={lightMode ? Images.logoDark : Images.logoLight}
          alt="JB Web Media Logo"
          width={200}
          height={80}
          priority
        />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleNavbar}>
          <span className="icon-bar"><i className="fas fa-bars"></i></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link"  href="/">
                <span className="rolling-text">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                <span className="rolling-text">About</span>
              </Link>
            </li>
            <li className="nav-item dropdown" onMouseMove={handleDropdownMouseMove} onMouseLeave={handleDropdownMouseLeave}>
              <Link className="nav-link dropdown-toggle" data-toggle="dropdown" href="/services" role="button" aria-haspopup="true" aria-expanded="false">
                <span className="rolling-text">Services</span>
              </Link>
              <div className="dropdown-menu">
            <Link className="dropdown-item" href="/services/seo-link-building">SEO & Link-Building</Link>
                <Link className="dropdown-item" href="/services/digital-marketing">Digital Marketing</Link>
                <Link className="dropdown-item" href="/services/creative-web-design">Creative Web Design</Link>
                <Link className="dropdown-item" href="/services/web-development">Web Development</Link>
                <Link className="dropdown-item" href="/services/app-development">App Development</Link>
                <Link className="dropdown-item" href="/services/content-marketing">Content Marketing</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/portfolio">
                <span className="rolling-text">Portfolio</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`/contact`}><span className="rolling-text">Contact</span></Link>
            </li>
          </ul>
        </div>

        <div className="search-form">
          <div className="form-group">
            <input type="text" name="search" placeholder="Search" />
            <button><span className="pe-7s-search"></span></button>
          </div>
          <div className="search-icon" onClick={toggleSearch}>
            <span className="pe-7s-search open-search"></span>
            <span className="pe-7s-close close-search"></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar