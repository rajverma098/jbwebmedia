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
                  <h4>content marketing</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>content marketing</h4>
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
              <h1 className="fz-55">Content Marketing Services That Increase Traffic, Leads & Sales</h1>
               <div className="text mt-30">
              <p>Content marketing gets people to your site and turns them into customers. Our content marketing services at <strong>JB WebMedia</strong> make that happen without the hassle. We're a straightforward content marketing agency using <strong>SEO content writing services</strong> to increase website traffic and generate leads online. It works great for all kinds of businesses, from small shops to growing companies.</p>
              <p>Struggling with low visitors or no sales from your website? We've helped dozens just like you.</p>
              <button type="submit" className="butn butn-md butn-bord radius-30">Get a Free Content Marketing Consultation</button>
            </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="text mt-30">
            <h2>Our Content Marketing Services</h2>
            <p>We focus on what actually works. No fancy promises, just content that brings people and sales. As your nearby <strong>content writing agency</strong>, here's exactly what we do:</p>
            <h2>1. SEO Content Writing Services (Expanded for depth)</h2>
            <p>Want Google to send you free traffic? Our SEO content writing services start with real research on what people search for. We write articles that answer questions and rank high.</p>
            <p><strong>What you get:</strong></p>
            <ul className='list_items'>
              <li>Articles stuffed with the best keywords, but natural</li>
              <li>On-page tweaks like headings and images with alt text</li>
              <li>Readability over 80, so everyone sticks around</li>
              <li>Smart meta titles and descriptions that get clicks</li>
              <li>Internal links to keep visitors exploring your site longer</li>
            </ul>
            <p>For example, we wrote a guide for a local plumber that jumped to page 1 for "emergency plumber near me." That's SEO content marketing services in action, steady calls ever since. Perfect if you're after long-term wins.</p>
          </div>
        </div>
          <div className='row'>
          <div className="text mt-30">
            <h2>2. Blog Writing Services</h2>
            <p>Nobody reads boring posts. Our blog writing services create stories your audience wants to share. We post weekly to keep Google happy and you top of mind.</p>
            <ul className='list_items'>
              <li>Detailed 1,500+ word guides and how-tos</li>
              <li>Real stories mixed with tips to build trust</li>
              <li>Eye-catching images, charts, or memes</li>
              <li>Clear calls to action like "book now" buttons</li>
              <li>Turn one blog into social posts, emails, even videos</li>
            </ul>
            <p>One client in e-commerce saw shares double after we added customer stories. Really pumps up the increase in website traffic from search and social.</p>
          </div>
        </div>
          <div className='row'>
          <div className="text mt-30">
            <h2>3. Website Content Writing Services</h2>
            <p>Your homepage might be losing sales. Our <strong>website content writing services</strong> rewrite it to grab attention and close deals. Think short intros, bullet benefits, testimonials.</p>
            <ul className='list_items'>
              <li>Nails your unique brand voice, professional or fun</li>
              <li>Every word pushes toward buying or contacting</li>
              <li>Snappy lengths that load fast on phones</li>
              <li>Smart FAQ sections that answer objections</li>
              <li>Service pages with pricing hints and guarantees</li>
            </ul>
            <p>Great for <strong>content marketing services for small businesses starting</strong>. A local cafe we helped triple-book from their "menu" page alone.</p>
          </div>
        </div>
        <div className='row'>
          <div className="text mt-30">
            <h2>4. Content Strategy & Planning</h2>
            <p>Shooting in the dark? We map it out. Audit what's working, spy on competitors, and build a 6-month calendar.</p>
            <ul className='list_items'>
              <li>Full competitor content breakdown</li>
              <li>Monthly content calendar with topics ready</li>
              <li>Pillar pages linking to cluster content</li>
              <li>Spot gaps where you can win easily</li>
              <li>Simple tracking to see ROI month by month</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className="text mt-30">
            <h2>5. Social Media Content</h2>
            <p>Social scrolls fast stand out. Quick <strong>social media content</strong> for Instagram Reels, LinkedIn tips, and Twitter polls.</p>
            <ul className='list_items'>
              <li>Captions that hook in 3 seconds</li>
              <li>Hashtag picks based on your niche</li>
              <li>Carousel posts telling mini-stories</li>
              <li>Ideas for Stories and Reels that go viral</li>
              <li>Prompts to get customers posting about you</li>
            </ul>
            <p>Increase quick lead generation online through DMs and links.</p>
          </div>
        </div>
            <div className='row'>
          <div className="text mt-30">
            <h2>6. Email Newsletters</h2>
            <p>Email beats social for sales. We craft sequences that nurture warm leads.</p>
            <ul className='list_items'>
              <li>Killer subject lines (open rates 40%+)</li>
              <li>Lists split by buyer stage or location</li>
              <li>A/B tests on what works best</li>
              <li>Automated drips for new subscribers</li>
              <li>Always rule-compliant, no spam issues</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className="text mt-30">
            <h2>7. Content Repurposing</h2>
            <p>Why write once? We stretch it: blog to YouTube script, podcast notes, infographics.</p>
            <ul className='list_items'>
              <li>Easy video scripts from your posts</li>
              <li>Podcast episode outlines with timestamps</li>
              <li>Shareable graphics for Pinterest</li>
              <li>Long Twitter threads breaking it down</li>
              <li>Compile into lead-magnet eBooks</li>
            </ul>
            <p><strong>Affordable content marketing services</strong> that give 5x the value.</p>
          </div>
        </div>
        <div className='row'>
          <div className="text mt-30">
            <h2>Why Choose Our Content Marketing Services?</h2>
            <p>Why us over others as the <strong>best content marketing company</strong>? We've been at this for 14+ years:</p>
            <ul className='list_items'>
              <li><strong>Real numbers:</strong> Clients hit 3x increase in website traffic in 6 months, some 5x</li>
              <li><strong>Focus:</strong> Cultural tweaks for content marketing services, local keywords, and local searches</li>
              <li><strong>SEO baked in:</strong> Every piece helps improve search rankings long-term</li>
              <li><strong>Flexible for all:</strong> Startups get the same care as corporates</li>
              <li><strong>Quick delivery:</strong> Blogs in 48 hours, strategies in a week</li>
              <li><strong>Full tracking:</strong> Free Google Analytics setup & monthly reports</li>
            </ul>
            <p><strong>Hire a content marketing agency</strong> that understands content marketing services for small business budgets. Experts in content marketing for SaaS (tutorials, webinars) and content marketing for e-commerce (reviews, buying guides).</p>
          </div>
        </div>
        <div className='row'>
          <div className="text mt-30">
            <h2>Technologies & Tools We Use</h2>
            <p>Everyday gear for pro results:</p>
            <ul className='list_items'>
              <li>Ahrefs/SEMrush for keywords and backlinks</li>
              <li>Grammarly Pro for clean writing</li>
              <li>Canva/Adobe for thumbnails and infographics</li>
              <li>Google Analytics + Search Console for proof</li>
              <li>HubSpot free tier for strategy and emails</li>
            </ul>
            <p>Powers <strong>reliable SEO content marketing services</strong>.</p>
          </div>
        </div>
        <div className='row'>
          <div className="text mt-30">
            <h2>Our Content Marketing Process</h2>
            <p>4 simple steps to content that converts:</p>
            <ol className='list_items'>
              <li><strong>1. Discovery & Strategy</strong>
              <p>One call: Review site, goals, audience. Keyword list ready.</p>
              </li>
              <li><strong>2. Content Creation</strong>
              <p>Detailed briefs, first draft, your feedback & final polish.</p>
              </li>
              <li><strong>3. Optimization & Distribution</strong>
              <p>SEO check, publish on site/social/email. Promote to your list.</p>
              </li>
              <li><strong>4. Analysis & Iteration</strong>
              <p><strong>Week 1 report:</strong> Traffic, shares, leads. Adjust the next batch.</p>
              </li>              
            </ol>
            <p>Your <strong>free content marketing consultation</strong> covers step 1.</p>
          </div>
        </div>
        <div className='row'>
          <div className="text mt-30">
            <h2>Industries We Serve</h2>
            <p>Content marketing services customized for:</p>
            <ul className='list_items'>
              <li><strong>Content marketing for SaaS:</strong> API docs, case studies, churn reducers</li>
              <li><strong>Content marketing for e-commerce:</strong> "Best Smartphones 2026" lists, unboxing videos</li>
              <li>Healthcare (wellness tips)</li>
              <li>Education (course previews)</li>
              <li>Real Estate (neighbourhood guides)</li>
              <li>B2B Services (whitepapers)</li>
              <li>Content marketing services for small businesses (local SEO wins)</li>
            </ul>
            <p>Your <strong>free content marketing consultation</strong> covers step 1.</p>
          </div>
        </div>
            <div className='row'>
          <div className="text mt-30">
            <h2>Pricing & Packages</h2>
            <p>Straightforward plans:</p>
            <table className='table_grid'>
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Details</th>
                  <th>Monthly Starting</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Starter</strong></td>
                  <td>4 SEO blogs & basic strategy</td>
                  <td>$199</td>
                </tr>
                <tr>
                  <td><strong>Growth</strong></td>
                  <td>8 blogs, 10 social media posts &  Strategy</td>
                  <td>$499</td>
                </tr>
                <tr>
                  <td><strong>Pro</strong></td>
                  <td>12 Blogs, repurposing & audits</td>
                  <td>$999</td>
                </tr>
                  <tr>
                  <td><strong>Enterprise</strong></td>
                  <td>Unlimited & dedicated writer</td>
                  <td>As per your requirements</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" className="butn butn-md butn-bord radius-30 mt-30">Request a Quote today</button>
          </div>
        </div>
      </div>
     
    </header>
  )
}

export default Header