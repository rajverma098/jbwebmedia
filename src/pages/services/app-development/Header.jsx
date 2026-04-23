import React from "react";

function Header({ data, subBg }) {
  return (
    <header className={`page-header  pb-0 ${subBg ? "sub-bg" : ""}`}>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {new Array(5).fill().map((_, i) => (
              <div className="item" key={i}>
                <h4>App Development</h4>
              </div>
            ))}
          </div>
          <div className="box">
            {new Array(5).fill().map((_, i) => (
              <div className="item" key={i}>
                <h4>App Development</h4>
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
                Mobile App Development Services for Scalable, High-Performance
                Apps
              </h1>
              <div className="text mt-30">
                <p>
                  Your app should work smoothly, grab users, and help your
                  business grow. Our{" "}
                  <strong>mobile app development services</strong> at{" "}
                  <strong>JB WebMedia</strong> do just that. We're a reliable
                  app development company building custom mobile app development
                  for folks around the world.
                </p>
                <button
                  type="submit"
                  className="butn butn-md butn-bord radius-30"
                >
                  Get a Free App Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-40">
          <div className="text">
          <h2>Our Mobile App Development Services</h2>
          <p>
            We handle all kinds of app projects. Here's what we do as your go-to
            app development company:
          </p>
          <h2>1. Custom Mobile App Development</h2>
          <p>
            Custom mobile app development means we build exactly what you need
            no generic templates.{" "}
            <strong>Affordable mobile app development services</strong> that fit
            any budget.
          </p>
          <p>
            <strong>What we offer:</strong>
          </p>
          <ul className="list_items">
            <li>Features made for your idea</li>
            <li>A backend that handles more users over time</li>
            <li>Safe data setup</li>
            <li>SEO-friendly tweaks for app stores</li>
            <li>Tuned for speed even with lots of traffic</li>
          </ul>
          <p>
            Great for <strong>mobile app development for startups</strong>.
          </p>
          </div>
        </div>
        <div className="row">
          <div className="text">
          <h2>2. Android App Development</h2>
          <p>
            Android is huge, so our Android app development services get it
            right. We use Kotlin to make apps fast and native-feeling.
          </p>
          <ul className="list_items">
            <li>Set up for Google Play</li>
            <li>Clean Material Design</li>
            <li>Works offline too</li>
            <li>Notifications that pop</li>
            <li>Ties into phone features</li>
          </ul>
          <p>Hire mobile app developers who really know Android.</p>
        </div>
        </div>
        <div className="row">
          <div className="text">
          <h2>3. iOS App Development</h2>
          <p>
            For iPhone fans, our <strong>iOS app development services</strong>{" "}
            shine. Apps in Swift that Apple loves and users stick with.
          </p>
          <ul className="list_items">
            <li>True iOS speed</li>
            <li>Cool AR and new UI tools</li>
            <li>Help getting into App Store</li>
            <li>Privacy built in</li>
            <li>Widgets and voice stuff</li>
          </ul>
          <p>Quality from a custom mobile app development company.</p>
        </div>
        </div>
        <div className="row">
           <div className="text">
          <h2>4. Cross-Platform App Development</h2>
          <p>
            One app for both Android and iOS saves cash. Our{" "}
            <strong>Flutter app development</strong> or{" "}
            <strong>React Native app development</strong> provides smooth,{" "}
            <strong>efficient mobile app development services</strong>.
          </p>
          <ul className="list_items">
            <li>Same code everywhere</li>
            <li>Quick changes while building</li>
            <li>Feels native</li>
            <li>Shared designs</li>
            <li>Cheaper to grow</li>
          </ul>
        </div>
        </div>
        <div className="row">
          <div className="text">
          <h2>5. UI/UX Design for Mobile Apps</h2>
          <p>
            We design screens people love to tap. Keeps them using your app
            longer—often 40% more time spent.
          </p>
          <ul className="list_items">
            <li>Talk to real users first</li>
            <li>Sketches to test versions</li>
            <li>Fun animations</li>
            <li>Easy for everyone</li>
            <li>Test what converts best</li>
          </ul>
        </div>
        </div>
        <div className="row">
           <div className="text">
          <h2>6. App Testing & Quality Assurance</h2>
          <p>We test hard, so your app doesn't crash on launch day.</p>
          <ul className="list_items">
            <li>Check all functions</li>
            <li>Speed under pressure</li>
            <li>Security scans</li>
            <li>Real user trials</li>
            <li>Works on every device</li>
          </ul>
        </div>
        </div>
        <div className="row">
          <div className="text">
          <h2>7. App Maintenance & Support</h2>
          <p>
            Apps need care after launch. We fix issues and add stuff as the{" "}
            <strong>best-in-class app development company.</strong>
          </p>
          <ul className="list_items">
            <li>Quick bug fixes</li>
            <li>Watch the servers</li>
            <li>New features</li>
            <li>Store rule checks</li>
            <li>Help anytime</li>
          </ul>
          <p>
            Your <strong>mobile app development quote</strong> can include this.
          </p>
        </div>
        </div>
        <div className="row">
             <div className="text">
          <h2>Why Choose Our Mobile App Development Services?</h2>
          <p>
            What makes us different as the best app development company? Simple:
          </p>
          <ul className="list_items">
            <li>We do native and cross-platform right</li>
            <li>Apps run fast and grow easy</li>
            <li>Designs users actually like</li>
            <li>Safe and follows rules</li>
            <li>Clients get 4.8+ star ratings</li>
            <li>Affordable mobile app development services with pro results</li>
          </ul>
          <p>
            Hire mobile app developers for world-class work at competitive
            prices. Best mobile app development services tailored to your needs.
          </p>
        </div>
        </div>
        <div className="row">
           <div className="text">
          <h2>Technologies We Use</h2>
          <p>Tools we trust for great apps:</p>
          <ul className="list_items">
            <li>Flutter app development</li>
            <li>React Native app development</li>
            <li>Kotlin for Android</li>
            <li>Swift (iOS)</li>
            <li>Firebase</li>
            <li>Node.js & Express (backend development)</li>
            <li>REST APIs & GraphQL</li>
            <li>AWS & cloud services for scalable backends</li>
            <li>MongoDB & MySQL (databases)</li>
            <li>Git & CI/CD for smooth deployment</li>
          </ul>
        </div>
        </div>
        <div className="row">
            <div className="text">
          <h2>Our Mobile App Development Process</h2>
          <p>We keep steps clear so you know what's next:</p>
          <ol className="list_items">
            <li>
              <strong>1. Requirement Analysis</strong>
              <p>Chat about your goals and who will use it.</p>
            </li>
            <li>
              <strong>2. UI/UX Design</strong>
              <p>From rough ideas to ones you can try.</p>
            </li>
            <li>
              <strong>3. Development</strong>
              <p>Build in short bursts, check daily.</p>
            </li>
            <li>
              <strong>4. Testing</strong>
              <p>Try everything on real devices.</p>
            </li>
            <li>
              <strong>5. Deployment</strong>
              <p>Get it live in stores.</p>
            </li>
            <li>
              <strong>6. Maintenance</strong>
              <p>Help it stay good over time.</p>
            </li>
          </ol>
          <button type="submit" className="butn butn-md butn-bord radius-30">
            Request a mobile app development quote
          </button>
        </div>
        </div>
        <div className="row mt-40">
            <div className="text">
          <h2>Industries We Serve</h2>
          <p>We build apps for all these as an <strong>app development company</strong>:</p>
          <ol className="list_items">
            <li>Healthcare</li>
            <li>eCommerce (eCommerce mobile app development, online shopping app development)</li>
            <li>Education</li>
            <li>FinTech</li>
            <li>Real Estate</li>
            <li>On-Demand like delivery</li>
            <li>Startups and big companies</li>
          </ol>
          <p>From <strong>mobile app development for startups</strong> to pro custom mobile app development.</p>
          <button type="submit" className="butn butn-md butn-bord radius-30">
            Get a Free App Consultation
          </button>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
