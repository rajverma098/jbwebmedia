import React from "react";

function Header({ data, subBg }) {
  return (
    <header className={`page-header  pb-0 ${subBg ? "sub-bg" : ""}`}>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {new Array(5).fill().map((_, i) => (
              <div className="item" key={i}>
                <h4>web development</h4>
              </div>
            ))}
          </div>
          <div className="box">
            {new Array(5).fill().map((_, i) => (
              <div className="item" key={i}>
                <h4>web development</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-80 mb-80">
        <div className="row">
          <div className="col-lg-12">
            <div className="caption">
              <h1 className="fz-55">
                Website Development Services That Build Fast, Scalable &
                High-Converting Websites
              </h1>
              <div className="text mt-30">
                <p>
                  A good website needs to load quickly, look sharp on phones,
                  and bring in sales. That's what our{" "}
                  <strong>website development services</strong> do at{" "}
                  <strong>Jb WebMedia</strong>. We're a solid{" "}
                  <strong>web development company</strong> helping businesses
                  and others create sites that are SEO-friendly, safe, and built
                  to last.
                </p>
                <button
                  type="submit"
                  className="butn butn-md butn-bord radius-30"
                >
                  Request a Design Quote today
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-40">
          <h2>Our Website Development Services</h2>
          <p>
            Building websites shouldn't be a hassle. As your{" "}
            <strong>local web development company</strong>, we cover everything
            you need:
          </p>
        </div>
        <div className="row mt-40">
          <h2>1. Custom Website Development:</h2>
          <p>
            Ditch templates and get a website built just for you. We craft
            unique layouts, scalable setups, and secure code that grows with
            your business. Perfect for startups or established firms wanting
            affordable website development services.
          </p>
          <p>
            <strong>Here's what you get:</strong>
          </p>
          <ul className="list_items">
            <li>Layouts and features that fit you perfectly</li>
            <li>Set up that grows as your traffic does</li>
            <li>Easy navigation so people don't leave</li>
            <li>SEO-friendly structure to show up in searches</li>
            <li>Secure builds that run smoothly and fast</li>
          </ul>
          <p>
            Great for <strong>affordable website development services</strong>{" "}
            or bigger projects.
          </p>
        </div>
        <div className="row mt-40">
          <h2>2. WordPress Website Development:</h2>
          <p>
            WordPress powers 40% of the web. Let's make yours stand out. As
            WordPress website developers, we build fast, flexible sites with
            custom themes for{" "}
            <strong>affordable website development services</strong> for small
            businesses.
          </p>
          <p>
            <strong>We handle:</strong>
          </p>
          <ul className="list_items">
            <li>Custom themes built from scratch</li>
            <li>Adding the right plugins</li>
            <li>Setting up blogs and content management</li>
            <li>Making it load faster</li>
            <li>Works great on mobiles</li>
          </ul>
          <p>Super for website development services for small businesses.</p>
        </div>
            <div className="row mt-40">
          <h2>3. eCommerce Website Development:</h2>
          <p> Turn visitors into buyers with stores on <strong>Shopify website development services</strong> or <strong>WooCommerce development services</strong>. We set up secure payments and mobile shops ideal for sellers scaling online fast. </p>
          <p>
            <strong>Plus:</strong>
          </p>
          <ul className="list_items">
            <li>Product pages organized nice</li>
            <li>Safe payment setups</li>
            <li>Smooth carts and checkouts</li>
            <li>Stock tracking</li>
            <li>Shopping that works on phones</li>
          </ul>
          <p><strong>Hire website development company</strong> folks who know sales.</p>
        </div>
             <div className="row mt-40">
          <h2>4. Business Website Development:</h2>
          <p> Need a pro website for your startup, agency, or local shop? Our website development services for small businesses deliver lead-grabbing designs and trusted website development services for real results.</p>
          <p>We do website development services for small businesses, startups, service pros, agencies, and local shops. Clean sites that pull in leads are top website development services.</p>
        </div>
           <div className="row mt-40">
          <h2>5. Landing Page Development:</h2>
          <p>Ads not converting? Our landing page development pages are built to sell, for Google, Facebook, or launches. Quick to build, SEO-friendly, and optimized to boost your ROI right away.</p>
          <p>Nail your ads with landing page development. Perfect for Google Ads, Facebook pages, services, or new products. Pages that convert clicks to action.</p>
        </div>
           <div className="row mt-40">
          <h2>6. Website Redesign Services:</h2>
          <p>Old website slowing you down? Our website redesign services refresh looks, speed, and sales flow. Get mobile responsiveness and better SEO structure without starting over, a smart upgrade for busy owners.</p>
          <p>Our website redesign services fix old sites and make them better. We tweak looks and ease of use, speed, mobile fit, SEO structure, and sales paths.</p>
        </div>
          <div className="row mt-40">
          <h2>7. Website Maintenance & Support:</h2>
          <p>Don't let glitches hurt your business. Our ongoing support handles updates, security, and speed peace of mind from a <strong>reliable web development company</strong>, so you can focus on growing.</p>
          <p>
            <strong>After launch, we keep it going:</strong>
          </p>
          <ul className="list_items">
            <li>Updates as needed</li>
            <li>Fixing glitches</li>
            <li>Fresh plugins and themes</li>
            <li>Speed checks</li>
            <li>Security watches</li>
            <li>Backups</li>
          </ul>
          <p>Reliable help from your <strong>web development company</strong>.</p>
        </div>
               <div className="row mt-40">
          <h2>Why Choose Our Website Development Services?</h2>
          <p>Folks come to us because we deliver what works. Check this:</p>
          <ul className="list_items">
            <li>Designs that start with mobile in mind</li>
            <li>Code that's good for SEO</li>
            <li>Pages that load super quick</li>
            <li>Security you can trust</li>
            <li>Layouts built to sell</li>
            <li>Room to grow later</li>
          </ul>
          <p>We're the <strong>best web development company</strong> for custom website development needs. Need website development services? Right here.</p>
        </div>
              <div className="row mt-40">
          <h2>Technologies We Use</h2>
          <p>We use a modern tech stack to build fast, scalable, and SEO-friendly websites:</p>
          <ol className="list_items">
            <li><strong>Core Development:</strong>
            <p>WordPress, Shopify, WooCommerce, React, Next.js, Node.js, PHP, MySQL</p>
            </li>
             <li><strong>Frontend Technologies:</strong>
            <p>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap</p>
            </li>
             <li><strong>Backend & APIs:</strong>
            <p>Node.js, Express.js, Laravel, REST APIs, GraphQL</p>
            </li>
             <li><strong>CMS & Platforms:</strong>
            <p>WordPress, Webflow, Wix, Kajabi, Squarespace, Headless CMS (Strapi, Contentful)</p>
            </li>
             <li><strong>eCommerce Solutions:</strong>
            <p>Shopify, WooCommerce, Magento, BigCommerce</p>
            </li>
             <li><strong>Database & Hosting:</strong>
            <p>MySQL, MongoDB, Firebase, AWS, Google Cloud, Vercel</p>
            </li>
             <li><strong>Tools & Optimization:</strong>
            <p>Git, GitHub, Core Web Vitals Optimization, Technical SEO, PageSpeed Optimization</p>
            </li>
      
          </ol>
          <p>Handles everything from React web development services to easy Shopify website development services.</p>
        </div>
                  <div className="row mt-40">
          <h2>Our Website Development Process</h2>
          <p>We make it easy, step by step, so you get a great site on time.</p>
          <ol className="list_items">
            <li><strong>1. Requirement Analysis</strong>
            <p>We talk through what you want and need.</p>
            </li>
             <li><strong>2. Planning & Wireframing</strong>
            <p>Sketch out the layout and how users move around.</p>
            </li>
             <li><strong>3. UI/UX Design</strong>
            <p>Design something clean and easy to use.</p>
            </li>
             <li><strong>4. Development</strong>
            <p>Build it all out so it works perfectly.</p>
            </li>
             <li><strong>5. Testing & Launch</strong>
            <p>Test for speed, phones, and bugs, then go live.</p>
            </li>
             <li><strong>6. Maintenance</strong>
            <p>Stick around to update and protect it.</p>
            </li>
          </ol>
          <p>An easy way to <strong>hire a website development company</strong> without worries.</p>
        </div>
                   <div className="row mt-40">
          <h2>Industries We Serve</h2>
          <p>We work with businesses everywhere as a <strong>trusted web development company</strong>:</p>
          <ul className="list_items">
            <li>Real Estate</li>
            <li>Healthcare</li>
            <li>Education</li>
              <li>eCommerce</li>
            <li>IT & SaaS</li>
            <li>Local Businesses</li>
             <li>Service-Based Companies</li>
          </ul>
          <p>From cheap, <strong>affordable website development services</strong> for local spots to full eCommerce website development, we get it.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
