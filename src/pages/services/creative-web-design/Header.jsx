import React from 'react';

function Header({ data, subBg }) {
  return (
    <header className={`page-header  pb-0 ${subBg ? 'sub-bg' : ''}`}>
       <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>creative web design</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>creative web design</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="container mt-80 mb-80">
        <div className="row">
          <div className="col-lg-12">
            <div className="caption">
              <h1 className="fz-55">Creative Website Design Services That Turn Visitors into Customers</h1>
                <div className="text">
              <p>Your website makes the first impression for your business. At <strong>JB WebMedia</strong>, we handle <strong>creative website design services</strong> that grab attention and get people to buy, sign up, or call. We fix old sites or build new ones from scratch. Everything we do focuses on smooth user experience, quick loading times, and SEO-friendly setups that help you show up in searches.</p>
            </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <h2>Want to check your site?</h2>
              <div className="text">
              <p><strong>Get a Free Website Audit</strong> or <strong>Request a Design Quote</strong> right now. Let's turn those visitors into real customers.</p>
            </div>
        </div>
          <div className='row'>
          <h2>What is Website Design?</h2>
              <div className="text">
              <p>Website design means making websites that look great and work even better. It's not just about colours or pictures. It's picking the right layouts, buttons, and flows so people stick around. Our website design services always include responsive website design that fits phones, tablets, and computers perfectly. We add <strong>UI UX design services</strong> to make sure it's easy and fun to use.</p>
              <p>It's like setting up a store where customers find what they want fast, with no frustration.</p>
            </div>
        </div>
          <div className='row'>
          <h2>Why is Professional Website Design Important?</h2>
              <div className="text">
              <p>Bad websites chase people away quickly. Stats show almost 9 out of 10 visitors bounce in seconds if it's clunky. Professional website design changes that. It builds trust right away, keeps folks engaged, and helps you make more money.</p>
              <p>Sites with <strong>responsive website design</strong> get way more action on phones, over twice as much. Our <strong>creative website design services</strong> make sure your website ranks better, loads fast, and turns clicks into sales. You get real results from better website performance and a fresh, modern design.
</p>
            </div>
        </div>
          <div className='row'>
          <h2>Creative Website Design Services for Modern Businesses</h2>
              <div className="text">
              <p>Today's businesses can't settle for basic templates. They need a custom website design that fits like a glove. Our creative website design services mix fresh ideas with smart plans. We build mobile-friendly sites that nail user experience and crank up conversion rate optimization.</p>
              <p>From small shops to big companies, we create professional website designs that grow with you. Count on us for <strong>top UI UX design services</strong>, speedy, fast loading, and SEO-friendly features that keep customers coming back.</p>
            </div>
        </div>
            <div className='row'>
          <h2>Work with an Experienced Website Design Specialist</h2>
              <div className="text">
              <p>Our team has over 14+ years under their belts in website design services. We have worked with 500+ clients and helped triple their traffic or bump conversions by 40%. No more trial and error. Our specialists will look at your website and map out exactly what to do next for killer modern design.</p>
              <button type="submit" className="butn butn-md butn-bord radius-30"><span className="text">Request a Design Quote today</span></button>
            </div>
        </div>
               <div className='row'>
          <h2>Our Website Design Services</h2>
              <div className="text">
              <p>We cover all the bases with website design services made just for you. Check these out:</p>
              <h3>1. Custom Website Design Services</h3>
              <p>Forget boring templates. Our custom website design starts fresh with your brand in mind. We tweak colours, buttons, and more for a killer user interface and conversion rate optimization. Plus, it's all SEO-friendly to help you get found.</p>
                <h3>2. Responsive Website Design</h3>
              <p>Phones rule the web now. Responsive website design makes sure your site shines on any screen. It loads fast and feels great, so users stay and do what you want them to.</p>
                <h3>3. UI/UX Design Services</h3>
              <p>Good UI UX design services make sites feel natural. We use real user tests and tweaks to boost user experience and website performance. People love using it, and that means more wins for you.</p>
                <h3>4. Website Redesign Services</h3>
              <p>Tired site? Our website redesign services give it new life with a modern design, better mobile setup, and SEO-friendly fixes. Traffic often doubles fast.</p>
                <h3>5. Landing Page Design Services</h3>
              <p>Need pages that sell? Our landing page design focuses on quick wins with <strong>top conversion rate optimization</strong>, fast loading, and smooth user experience.</p>
            </div>
        </div>
                 <div className='row'>
          <h2>What Makes Our Website Design Stand Out</h2>
              <div className="text">
              <p>What sets our professional website design apart? Think handcrafted custom website design, pages that load in under 2 seconds, and <strong>smart UI UX design services</strong>. We pack in SEO-friendly code, responsive website design, and trendy touches like smooth animations. Clients tell us engagement jumps 50% or more. We put people first, then the search engines.</p>
              <h3>Types of Websites We Design</h3>
              <p>We handle <strong>professional website design services</strong> for all kinds:</p>
              <ul className='list_items'>
                <li><strong>Business websites:</strong> Clean setups that snag leads.</li>
                <li><strong>eCommerce website design:</strong> Safe shops with tricks to cut cart drop-offs.</li>
                <li><strong>SaaS platforms:</strong> Easy-to-use control panels.</li>
                <li><strong>Portfolio websites:</strong> Eye-catching spots for your work.</li>
                <li><strong>Blog and content websites:</strong> Quick, fast-loading websites that pull in readers.</li>
                <li><strong>Landing pages:</strong> Laser-focused landing page design for big results.</li>
              </ul>
              <p>Everyone gets a <strong>responsive website design</strong> and solid website performance.</p>
            </div>
        </div>
              <div className='row'>
          <h2>Our Website Design Process</h2>
            <p>We keep it simple with these 6 steps, teamwork all the way:</p>
              <div className="text">
              <h3>1. Research & Strategy</h3>
              <p>We dig into your goals, customers, and rivals to plan an SEO-friendly path.</p>
               <h3>2. Wireframing & UI Planning</h3>
              <p>Quick sketches sort out the user interface and the user experience.</p>
               <h3>3. Design & Mockups</h3>
              <p>Fun modern design drafts you can tweak.</p>
               <h3>4. Development & Testing</h3>
              <p>We build it responsive, test everything for fast loading and no glitches.</p>
               <h3>5. SEO Optimization</h3>
              <p>Fine-tune for searches and better conversions.</p>
              <h3>6. Launch & Support</h3>
              <p>Smooth rollout and help whenever you need it.</p>
              <p>This way, you get great results without headaches.</p>
            </div>
        </div>
        <div className='row'>
          <h2>Industries We Serve</h2>
          <p>Our website design services fit tons of fields:</p>
           <div className="text">
          <ul className='list_items'>
            <li><strong>eCommerce:</strong> Stores that sell more.</li>
            <li><strong>SaaS:</strong> Simple sign-ups for users.</li>
            <li><strong>Local businesses:</strong> Sites that bring people in the door.</li>
            <li><strong>Agencies:</strong>Standout portfolios.</li>
            <li><strong>Service-based companies:</strong> Lead magnets.</li>
          </ul>
          <p>From startups to global brands, we deliver creative website design services tailored to your niche.</p>
          <h2>Why Choose Our Website Design Services</h2>
          <p>Pick us for real know-how, fair prices, and sites that deliver. We promise mobile-friendly, SEO-friendly work with near-perfect uptime. Clients see about 35% more revenue after we launch with a strong user experience, fast loading, and conversion rate optimization. And we're here for the long haul.</p>
          <h2>Tools & Technologies We Use</h2>
          <p>We rely on a modern, performance-driven tech stack to deliver fast, scalable, and SEO-friendly websites. Every tool we use is chosen to enhance user experience, improve site speed, and give your website a competitive edge.</p>
          <h4>Technologies:</h4>
          <ul className='list_items'>
            <li><strong>Figma:</strong> For intuitive and high-converting UI/UX design services</li>
            <li><strong>React:</strong> To build smooth, fast, and fully responsive website interfaces</li>
            <li><strong>Adobe XD / Photoshop:</strong> For visual design elements and creatives</li>
            <li><strong>HTML5:</strong> Structured, semantic, and SEO-friendly page layouts</li>
            <li><strong>CSS3 / Tailwind CSS :</strong> Clean styling with responsive and fast-loading design</li>
            <li><strong>JavaScript (ES6+):</strong>  Interactive and dynamic user experiences</li>
            <li><strong>React.js:</strong> For fast, scalable, and smooth front-end interfaces</li>
            <li><strong>Next.js:</strong> For SEO-friendly, server-side rendered (SSR) websites</li>
            <li><strong>WordPress (Custom + Elementor):</strong> Flexible CMS for easy content management</li>
            <li><strong>Shopify :</strong> For high-converting eCommerce website design</li>
                <li><strong>Bootstrap :</strong> Mobile-first responsive design framework</li>
            <li><strong>GSAP / Animations:</strong> Smooth animations for better engagement</li>
            <li><strong>Google PageSpeed Tools:</strong> For optimizing speed, performance, and overall site efficiency</li>
            <li><strong>Core Web Vitals Optimization :</strong> To improve real-world user experience</li>
            <li><strong>SEO-Friendly Code :</strong> Clean, structured, and optimized code to improve rankings</li>
          </ul>
          <button type="submit" class="butn butn-md butn-bord radius-30"><span class="text">Get a Custom Website Design Quote made for you</span></button>
        </div>
   </div>
      </div>
     
    </header>
  )
}

export default Header